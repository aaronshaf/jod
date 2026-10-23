// jod.mrm.org dynamic Worker: read-only MCP server (Streamable HTTP, stateless) + JSON search API.
// Only /mcp* and /api/* reach this code (assets.run_worker_first); everything else is static assets.
const SITE = "https://jod.mrm.org";
const SERVER = { name: "jod-mrm-org", title: "Journal of Discourses", version: "1.0.0" };
const PROTOCOLS = ["2025-06-18", "2025-03-26", "2024-11-05"];
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "content-type, mcp-protocol-version, mcp-session-id, accept", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Expose-Headers": "mcp-protocol-version" };
const json = (o, status = 200, extra = {}) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json; charset=utf-8", ...CORS, ...extra } });

const TOOLS = [
  { name: "search_discourses", title: "Search discourses", description: "Full-text search (BM25 ranking) across all Journal of Discourses sermons. All words must match; supports \"quoted phrases\" and -excluded words. Returns ranked hits with snippets, citation and URL.",
    inputSchema: { type: "object", properties: { query: { type: "string", description: "Search terms, e.g. \"plan of salvation\" or adam AND god" }, speaker: { type: "string", description: "Optional exact speaker name filter" }, volume: { type: "integer", minimum: 1, maximum: 26 }, year_from: { type: "integer" }, year_to: { type: "integer" }, limit: { type: "integer", minimum: 1, maximum: 50, default: 10 }, offset: { type: "integer", minimum: 0, default: 0 } }, required: ["query"] } },
  { name: "get_discourse", title: "Get discourse", description: "Full text and metadata of one discourse, by volume + start_page (e.g. 1, 1) or by id. Long texts can be paged with max_chars/offset_chars.",
    inputSchema: { type: "object", properties: { volume: { type: "integer" }, start_page: { type: "integer", description: "Start page or any page inside the discourse" }, id: { type: "string" }, max_chars: { type: "integer", default: 40000 }, offset_chars: { type: "integer", default: 0 } } } },
  { name: "list_volumes", title: "List volumes", description: "The 26 volumes with discourse counts, page ranges and date ranges.", inputSchema: { type: "object", properties: {} } },
  { name: "list_speakers", title: "List speakers", description: "All speakers with number of discourses and date range.", inputSchema: { type: "object", properties: {} } },
  { name: "list_discourses", title: "List discourses", description: "List discourses (metadata only), filterable by volume, speaker and year range.",
    inputSchema: { type: "object", properties: { volume: { type: "integer" }, speaker: { type: "string" }, year_from: { type: "integer" }, year_to: { type: "integer" }, limit: { type: "integer", default: 100, maximum: 500 }, offset: { type: "integer", default: 0 } } } },
  { name: "cite", title: "Cite", description: "Formatted citation (plain, Chicago-style, BibTeX) and canonical URL for a discourse page, e.g. volume 1 page 3. Optionally a page number deep link.",
    inputSchema: { type: "object", properties: { volume: { type: "integer" }, page: { type: "integer", description: "Any page within the discourse" } }, required: ["volume", "page"] } },
].map(t => ({ ...t, annotations: { readOnlyHint: true, openWorldHint: false } }));

// ---- data layer: static sharded inverted index served from Workers static assets (no database) ----
const STOP = new Set("a an and are as at be but by for from had has have he her him his i if in into is it its me my not of on or our she so that the their them then there they this to was we were what when which who will with you your all been do did no shall unto upon us".split(" "));
const tok = s => (String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]+/g) || []);
let DOCS = null; const LOCAL = new Map(); const SHARDS = new Map();
async function asset(env, p) { const r = await env.ASSETS.fetch(new Request(SITE + p)); if (!r.ok) throw new Error(`asset ${p}: ${r.status}`); return r.json(); }
async function docs(env) { if (!DOCS) DOCS = await asset(env, "/_idx/docs.json"); return DOCS; }
async function shard(env, w) { const k = w.slice(0, 2).padEnd(2, "_"); if (!SHARDS.has(k)) SHARDS.set(k, asset(env, `/_idx/${k}.json`).catch(() => ({}))); return SHARDS.get(k); }
const metaOf = d => ({ id: d.id, volume: d.v, start_page: d.s, end_page: d.e, title: d.t, speaker: d.sp, date: d.d, url: d.u, citation: d.c });
async function findByPage(env, volume, page) { const { docs: D } = await docs(env); return D.filter(d => d.v === volume && d.s <= page && d.e >= page).sort((a, b) => b.s - a.s)[0] || D.find(d => d.v === volume && d.s === page); }
const full = (env, d) => asset(env, `/${d.v}/${d.s}/index.json`);
function parseQuery(q) {
  q = String(q || "").slice(0, 300); if (!q.trim()) throw new Error("query is required");
  const phrases = [...q.matchAll(/"([^"]+)"/g)].map(m => m[1].toLowerCase().replace(/\s+/g, " ").trim()).filter(Boolean);
  const rest = q.replace(/"[^"]*"/g, " ");
  const not = [...rest.matchAll(/(?:^|\s)[-!](\S+)/g)].flatMap(m => tok(m[1]));
  const words = [...tok(rest.replace(/(?:^|\s)[-!]\S+/g, " ")), ...phrases.flatMap(tok)].filter(w => !STOP.has(w));
  return { words: [...new Set(words)], phrases, not };
}
function snippet(paras, words, phrases = []) {
  const esc = x => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pats = [...phrases.map(p => esc(p).replace(/ /g, "\\s+")), ...words.map(w => `\\b${esc(w)}\\w*`)];
  const first = new RegExp(pats.length ? pats[0] : "$^", "i"), any = new RegExp(pats.join("|") || "$^", "i");
  const para = paras.find(p => first.test(p)) || paras.find(p => any.test(p)) || paras[0] || "";
  const m = first.exec(para) || any.exec(para), i = m ? m.index : 0, start = Math.max(0, i - 120);
  const s = (start ? "… " : "") + para.slice(start, start + 320) + (start + 320 < para.length ? " …" : "");
  return pats.length ? s.replace(new RegExp(pats.join("|"), "gi"), "**$&**") : s;
}
async function search(env, a) {
  const limit = Math.min(Math.max(+a.limit || 10, 1), 50), offset = Math.max(+a.offset || 0, 0);
  const { words, phrases, not } = parseQuery(a.query);
  if (!words.length) throw new Error("query has no searchable words (stopwords only)");
  const { avg, docs: D } = await docs(env);
  const N = D.length, k1 = 1.2, b = 0.75, score = new Map(), hits = new Map();
  for (const w of words) {
    const arr = (await shard(env, w))[w] || [];
    const df = arr.length / 2, idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
    for (let i = 0; i < arr.length; i += 2) { const di = arr[i], tf = arr[i + 1], len = D[di].n || 1;
      score.set(di, (score.get(di) || 0) + idf * (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * len / avg))); hits.set(di, (hits.get(di) || 0) + 1); }
  }
  const excl = new Set(); for (const w of not) { const arr = (await shard(env, w))[w] || []; for (let i = 0; i < arr.length; i += 2) excl.add(arr[i]); }
  let cand = [...score.keys()].filter(di => hits.get(di) === words.length && !excl.has(di)).filter(di => { const d = D[di];
    return (!a.speaker || d.sp.toLowerCase() === String(a.speaker).toLowerCase()) && (!a.volume || d.v === +a.volume) && (!a.year_from || (d.d && +d.d.slice(0, 4) >= +a.year_from)) && (!a.year_to || (d.d && +d.d.slice(0, 4) <= +a.year_to)); });
  cand.sort((x, y) => score.get(y) - score.get(x));
  const out = []; let skipped = 0, checked = 0;
  for (const di of cand) {
    if (out.length >= limit || checked > 40) break;
    const d = D[di]; let paras = null;
    if (phrases.length) { checked++; paras = (await full(env, d)).text; const t = paras.join(" ").toLowerCase().replace(/\s+/g, " "); if (!phrases.every(p => t.includes(p))) continue; }
    if (skipped < offset) { skipped++; continue; }
    paras = paras || (await full(env, d)).text;
    out.push({ ...metaOf(d), snippet: snippet(paras, words, phrases), score: Math.round(score.get(di) * 100) / 100 });
  }
  return { query: a.query, total_candidates: phrases.length ? undefined : cand.length, count: out.length, offset, results: out };
}
async function callTool(env, name, a = {}) {
  switch (name) {
    case "search_discourses": return search(env, a);
    case "get_discourse": {
      let d; if (a.id) d = (await docs(env)).docs.find(x => x.id === a.id); else d = await findByPage(env, +a.volume, +a.start_page);
      if (!d) throw new Error("Discourse not found");
      const j = await full(env, d), textAll = j.text.join("\n\n");
      const max = Math.min(+a.max_chars || 40000, 100000), off = Math.max(+a.offset_chars || 0, 0);
      return { ...j, text: textAll.slice(off, off + max), text_length: textAll.length, offset_chars: off, truncated: off + max < textAll.length, markdown_url: j.url + "index.md" };
    }
    case "list_volumes": { const m = new Map(); for (const d of (await docs(env)).docs) { const v = m.get(d.v) || { volume: d.v, discourses: 0, first_page: d.s, last_page: d.e, earliest: d.d, latest: d.d, url: `${SITE}/${d.v}/` }; v.discourses++; v.first_page = Math.min(v.first_page, d.s); v.last_page = Math.max(v.last_page, d.e); if (d.d && (!v.earliest || d.d < v.earliest)) v.earliest = d.d; if (d.d && (!v.latest || d.d > v.latest)) v.latest = d.d; m.set(d.v, v); } return [...m.values()].sort((x, y) => x.volume - y.volume); }
    case "list_speakers": { const m = new Map(); for (const d of (await docs(env)).docs) { const s = m.get(d.sp) || { speaker: d.sp, discourses: 0, earliest: d.d, latest: d.d }; s.discourses++; if (d.d && (!s.earliest || d.d < s.earliest)) s.earliest = d.d; if (d.d && (!s.latest || d.d > s.latest)) s.latest = d.d; m.set(d.sp, s); } return [...m.values()].sort((x, y) => y.discourses - x.discourses); }
    case "list_discourses": {
      const lim = Math.min(+a.limit || 100, 500), off = Math.max(+a.offset || 0, 0);
      return (await docs(env)).docs.filter(d => (!a.volume || d.v === +a.volume) && (!a.speaker || d.sp.toLowerCase() === String(a.speaker).toLowerCase()) && (!a.year_from || (d.d && +d.d.slice(0, 4) >= +a.year_from)) && (!a.year_to || (d.d && +d.d.slice(0, 4) <= +a.year_to))).slice(off, off + lim).map(metaOf);
    }
    case "cite": {
      const d = await findByPage(env, +a.volume, +a.page);
      if (!d) throw new Error("No discourse contains that page");
      const page = +a.page, dt = d.d ? new Date(d.d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }) : "";
      return { short: `JD ${d.v}:${page}`, plain: d.c, chicago: `${d.sp}, "${d.h}," in Journal of Discourses, vol. ${d.v}, ${page === d.s ? `${d.s}-${d.e}` : page}${dt ? ` (delivered ${dt})` : ""}, ${d.u}.`,
        bibtex: `@incollection{jod${d.v}_${d.s},\n  author = {${d.sp}},\n  title = {${d.h}},\n  booktitle = {Journal of Discourses},\n  volume = {${d.v}},\n  pages = {${d.s}--${d.e}},\n  note = {Delivered ${dt}},\n  url = {${d.u}}\n}`,
        url: d.u, page_url: `${d.u}#${page}` };
    }
  }
  throw Object.assign(new Error(`Unknown tool: ${name}`), { code: -32602 });
}
async function cached(key, ttl, fn) {
  const cache = caches.default, req = new Request(key);
  const hit = await cache.match(req);
  if (hit) return hit.json();
  const val = await fn();
  await cache.put(req, new Response(JSON.stringify(val), { headers: { "content-type": "application/json", "cache-control": `public, max-age=${ttl}` } }));
  return val;
}
const keyFor = (name, args) => `${SITE}/__cache/v2/${name}?${new URLSearchParams(Object.entries(args || {}).sort().map(([k, v]) => [k, String(v)]))}`;

async function handleRpc(env, msg) {
  const { id, method, params = {} } = msg;
  const ok = result => ({ jsonrpc: "2.0", id, result });
  const err = (code, message) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });
  if (msg.jsonrpc !== "2.0" || typeof method !== "string") return err(-32600, "Invalid Request");
  if (id === undefined) return null; // notification
  switch (method) {
    case "initialize": {
      const v = PROTOCOLS.includes(params.protocolVersion) ? params.protocolVersion : PROTOCOLS[0];
      return ok({ protocolVersion: v, capabilities: { tools: { listChanged: false } }, serverInfo: SERVER,
        instructions: "Read-only access to the Journal of Discourses (26 vols, 1854-1886, public domain). Use search_discourses to find passages, get_discourse for full text, cite for citations. Cite as JD volume:page and link the returned url." });
    }
    case "ping": return ok({});
    case "tools/list": return ok({ tools: TOOLS });
    case "tools/call": {
      try {
        const data = await cached(keyFor(params.name, params.arguments), 86400, () => callTool(env, params.name, params.arguments || {}));
        return ok({ content: [{ type: "text", text: JSON.stringify(data, null, 1) }], structuredContent: Array.isArray(data) ? { items: data } : data, isError: false });
      } catch (e) {
        if (e.code === -32602) return err(-32602, e.message);
        return ok({ content: [{ type: "text", text: `Error: ${e.message}` }], isError: true });
      }
    }
    case "resources/list": return ok({ resources: [] });
    case "prompts/list": return ok({ prompts: [] });
    default: return err(-32601, `Method not found: ${method}`);
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    if (!(p === "/mcp" || p.startsWith("/mcp/") || p.startsWith("/api/"))) return env.ASSETS.fetch(request);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    let rl = "absent";
    // In-isolate fallback limiter (per IP, 60/min); the RL binding below is the shared per-location limiter.
    const now = Date.now(), slot = LOCAL.get(ip);
    if (!slot || now - slot.t > 60000) LOCAL.set(ip, { t: now, c: 1 }); else if (++slot.c > 60) return json({ error: "rate_limited", detail: "Too many requests; try again in a minute." }, 429, { "retry-after": String(Math.ceil((60000 - (now - slot.t)) / 1000)) });
    if (LOCAL.size > 5000) LOCAL.clear();
    if (env.RL) { const { success } = await env.RL.limit({ key: `ip:${ip}` }); rl = success ? "ok" : "limited"; if (!success) return json({ error: "rate_limited", detail: "Too many requests; try again in a minute." }, 429, { "retry-after": "60" }); }
    CORS["x-ratelimit"] = rl;
    try {
      if (p === "/mcp" || p === "/mcp/") {
        if (request.method === "GET") return json({ error: "This MCP server is stateless; use POST (Streamable HTTP, JSON responses).", docs: `${SITE}/.well-known/mcp.json` }, 405, { allow: "POST, OPTIONS" });
        if (request.method === "DELETE") return new Response(null, { status: 405, headers: CORS });
        if (request.method !== "POST") return json({ error: "method not allowed" }, 405);
        let body; try { body = await request.json(); } catch { return json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, 400); }
        const batch = Array.isArray(body) ? body.slice(0, 20) : [body];
        const out = (await Promise.all(batch.map(m => handleRpc(env, m)))).filter(Boolean);
        if (!out.length) return new Response(null, { status: 202, headers: CORS });
        return json(Array.isArray(body) ? out : out[0], 200, { "mcp-protocol-version": PROTOCOLS[0] });
      }
      if (p === "/api/search") {
        const q = url.searchParams.get("q"); if (!q) return json({ error: "q required" }, 400);
        const args = Object.fromEntries(url.searchParams); args.query = q; delete args.q;
        const data = await cached(keyFor("search_discourses", args), 86400, () => search(env, args));
        return json(data, 200, { "cache-control": "public, max-age=3600" });
      }
      let m;
      if ((m = /^\/api\/discourse\/(\d+)\/(\d+)\/?$/.exec(p))) {
        const data = await cached(keyFor("get_discourse", { volume: m[1], start_page: m[2] }), 86400, () => callTool(env, "get_discourse", { volume: +m[1], start_page: +m[2], max_chars: 100000 }));
        return json(data, 200, { "cache-control": "public, max-age=86400" });
      }
      if (p === "/api/volumes") return json(await cached(keyFor("list_volumes"), 86400, () => callTool(env, "list_volumes")), 200, { "cache-control": "public, max-age=86400" });
      if (p === "/api/speakers") return json(await cached(keyFor("list_speakers"), 86400, () => callTool(env, "list_speakers")), 200, { "cache-control": "public, max-age=86400" });
      if (p === "/api/" || p === "/api") return json({ endpoints: ["/api/search?q=", "/api/discourse/{volume}/{page}", "/api/volumes", "/api/speakers"], mcp: `${SITE}/mcp` });
      return json({ error: "not found" }, 404);
    } catch (e) {
      return json({ error: "bad_request", detail: String(e.message || e) }, 400);
    }
  },
};
