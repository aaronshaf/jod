// Validate the JSON-LD in a built site: node gen/check-jsonld.js [distDir]
// Checks: exactly one ld+json script per indexable page, one @graph, unique @ids per page, every {"@id"} reference resolves
// (on the page or to an @id defined elsewhere on the site), identical @type/name for an @id everywhere, schema.org vocabulary
// (types, properties, property domains and value ranges, using the official schemaorg-current-https.jsonld, downloaded to
// gen/.cache on first run), ISO dates, absolute URLs, breadcrumb order, and that Quotation text equals the visible quote.
// Not covered: Google Rich Results eligibility rules (use https://search.google.com/test/rich-results and validator.schema.org).
process.env.NODE_PATH = require("path").join(__dirname, "node_modules"); require("module").Module._initPaths();
const fs = require("fs"), path = require("path"), cheerio = require("cheerio");
const DIST = path.resolve(process.argv[2] || path.join(__dirname, "../dist"));
const SITE = "https://jod.mrm.org";
const NOLD = new Set(["404.html", "search/index.html", "quote/index.html"]);
const errors = [], warnings = [];
const offp = new Set(); const warnOnce = (f, w, id) => { offp.add(id); };
const err = (f, m) => errors.push(`${f}: ${m}`), warn = (f, m) => warnings.push(`${f}: ${m}`);

async function vocab() {
  const cache = path.join(__dirname, ".cache/schemaorg.jsonld");
  if (!fs.existsSync(cache)) { fs.mkdirSync(path.dirname(cache), { recursive: true }); const r = await fetch("https://schema.org/version/latest/schemaorg-current-https.jsonld"); if (!r.ok) throw new Error("cannot download schema.org vocabulary: " + r.status); fs.writeFileSync(cache, Buffer.from(await r.arrayBuffer())); }
  const g = JSON.parse(fs.readFileSync(cache, "utf8"))["@graph"];
  const arr = v => v === undefined ? [] : Array.isArray(v) ? v : [v];
  const id = v => String(v["@id"] || v).replace(/^schema:/, "");
  const classes = new Map(), props = new Map();
  for (const n of g) {
    const types = arr(n["@type"]);
    if (types.includes("rdf:Property")) props.set(id(n["@id"]), { domain: new Set(arr(n["schema:domainIncludes"]).map(id)), range: new Set(arr(n["schema:rangeIncludes"]).map(id)) });
    else if (types.some(t => t === "rdfs:Class" || t === "schema:DataType" || String(t).startsWith("schema:"))) classes.set(id(n["@id"]), { parents: arr(n["rdfs:subClassOf"]).map(id), data: types.includes("schema:DataType") });
  }
  const anc = new Map();
  const ancestors = t => { if (anc.has(t)) return anc.get(t); const s = new Set([t]); anc.set(t, s); for (const p of (classes.get(t) || { parents: [] }).parents) for (const a of ancestors(p)) s.add(a); return s; };
  return { classes, props, ancestors };
}

(async () => {
  const V = await vocab();
  const files = []; (function w(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) { if (e.name !== "pagefind") w(p); } else if (e.name.endsWith(".html")) files.push(p); } })(DIST);
  const allRefs = [], registry = new Map(), stats = { pages: 0, withLD: 0, nodes: 0, types: {} };
  const DT = ["Text", "URL", "Number", "Integer", "Float", "Boolean", "Date", "DateTime", "Time"];
  const okHost = u => { try { const h = new URL(u).hostname; return /(^|\.)(jod\.mrm\.org|mrm\.org|creativecommons\.org|wikipedia\.org|wikidata\.org|wikimedia\.org|schema\.org)$/.test(h); } catch { return false; } };
  for (const f of files) {
    const rel = path.relative(DIST, f).replace(/\\/g, "/"); stats.pages++;
    const html = fs.readFileSync(f, "utf8");
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
    if (NOLD.has(rel)) { if (scripts.length) err(rel, "unexpected JSON-LD on a noindex/redirect page"); continue; }
    if (scripts.length !== 1) { err(rel, `expected exactly 1 ld+json script, found ${scripts.length}`); continue; }
    let doc; try { doc = JSON.parse(scripts[0]); } catch (e) { err(rel, "JSON parse error: " + e.message); continue; }
    stats.withLD++;
    if (doc["@context"] !== "https://schema.org") err(rel, "@context must be https://schema.org");
    if (!Array.isArray(doc["@graph"]) || Object.keys(doc).length !== 2) { err(rel, "document must be {@context, @graph[]}"); continue; }
    const nodes = doc["@graph"], here = new Map(), refs = [];
    const $ = cheerio.load(html);
    const canon = $('link[rel="canonical"]').attr("href");
    for (const n of nodes) {
      if (!n["@id"]) err(rel, "top-level node without @id: " + JSON.stringify(n).slice(0, 80));
      else { if (here.has(n["@id"])) err(rel, "duplicate @id " + n["@id"]); here.set(n["@id"], n); if (!/^https:\/\/(jod|www)\.mrm\.org\//.test(n["@id"])) err(rel, "@id outside site/mrm: " + n["@id"]); }
    }
    const visit = (node, where, top) => {
      const types = Array.isArray(node["@type"]) ? node["@type"] : node["@type"] ? [node["@type"]] : [];
      if (!types.length) { if (Object.keys(node).length === 1 && node["@id"]) return; err(rel, `${where}: object without @type`); return; }
      stats.nodes++; for (const t of types) { stats.types[t] = (stats.types[t] || 0) + 1; if (!V.classes.has(t)) err(rel, `${where}: unknown type ${t}`); }
      const anc = new Set(types.flatMap(t => [...V.ancestors(t)]));
      for (const [k, v] of Object.entries(node)) {
        if (k.startsWith("@")) continue;
        if (k === "query-input" && types.includes("SearchAction")) continue; // Google's documented SearchAction extension
        const p = V.props.get(k); if (!p) { err(rel, `${where}.${k}: unknown schema.org property`); continue; }
        if (![...p.domain].some(d => anc.has(d))) err(rel, `${where}.${k}: property not valid on ${types.join("/")}`);
        for (const x of Array.isArray(v) ? v : [v]) {
          if (x === null || x === "") { err(rel, `${where}.${k}: empty value`); continue; }
          if (typeof x === "object") {
            if (Object.keys(x).length === 1 && x["@id"]) { refs.push([`${where}.${k}`, x["@id"]]); continue; }
            const vt = (Array.isArray(x["@type"]) ? x["@type"] : [x["@type"]]).filter(Boolean);
            if (vt.length && ![...p.range].some(r => vt.some(t => V.ancestors(t).has(r)))) err(rel, `${where}.${k}: ${vt} not in range [${[...p.range]}]`);
            visit(x, `${where}.${k}`, false);
          } else if (typeof x === "string") {
            if (k === "item" && types.includes("ListItem") && /^https:\/\//.test(x)) continue; // URL form documented by Google for breadcrumbs
            if (![...p.range].some(r => DT.includes(r))) err(rel, `${where}.${k}: string where only [${[...p.range]}] is expected`);
            if (p.range.has("Date") || p.range.has("DateTime")) { if (!/^\d{4}(-\d\d(-\d\d)?)?(T[\d:.]+(Z|[+-]\d\d:\d\d)?)?$/.test(x) && !p.range.has("Text")) err(rel, `${where}.${k}: bad date ${x}`); if (/date/i.test(k) && !/^\d{4}(-\d\d(-\d\d)?)?(T[\d:.]+(Z|[+-]\d\d:\d\d)?)?$/.test(x)) err(rel, `${where}.${k}: not ISO 8601: ${x}`); }
            if (/^https?:/.test(x)) { if (!x.startsWith("https://")) err(rel, `${where}.${k}: non-https URL ${x}`); if (!okHost(x)) err(rel, `${where}.${k}: unexpected host ${x}`); }
            else if (/url|contentUrl|sameAs|license|item$/i.test(k) && p.range.has("URL") && !p.range.has("Text")) err(rel, `${where}.${k}: relative or invalid URL ${x}`);
          } else if (typeof x === "number") { if (!["Number", "Integer", "Float"].some(r => p.range.has(r))) err(rel, `${where}.${k}: number not expected`); }
          else if (typeof x === "boolean") { if (!p.range.has("Boolean")) err(rel, `${where}.${k}: boolean not expected`); }
        }
      }
    };
    nodes.forEach((n, i) => visit(n, `${n["@type"]}[${i}]`, true));
    for (const [id, n] of here) {
      const types = [].concat(n["@type"]).join("/"), r = registry.get(id);
      if (r) { if (r.types !== types) err(rel, `@id ${id} has type ${types} here but ${r.types} on ${r.page}`); if (r.name !== n.name && n.name !== undefined && r.name !== undefined) err(rel, `@id ${id} has name "${n.name}" here but "${r.name}" on ${r.page}`); if (r.name === undefined && n.name !== undefined) r.name = n.name; }
      else registry.set(id, { types, name: n.name, page: rel });
    }
    for (const [w, id] of refs) { allRefs.push([rel, w, id]); if (!here.has(id)) warnOnce(rel, w, id); }
    // page-level rules
    const wp = nodes.find(n => [].concat(n["@type"]).some(t => /Page$/.test(t)));
    if (!wp) err(rel, "no WebPage node"); else if (canon && wp.url !== canon) err(rel, `WebPage.url ${wp.url} != canonical ${canon}`); else if (wp["@id"] !== wp.url + "#webpage") err(rel, "WebPage @id must be url#webpage");
    const bc = nodes.find(n => n["@type"] === "BreadcrumbList");
    if (bc) { bc.itemListElement.forEach((it, i) => { if (it.position !== i + 1) err(rel, "breadcrumb position out of order"); }); if (canon && bc.itemListElement[bc.itemListElement.length - 1].item !== canon) err(rel, "last breadcrumb is not the page itself"); }
    const q = nodes.find(n => n["@type"] === "Quotation");
    if (q) { const shown = $(".jq blockquote").clone().children().remove().end().text().trim(); if (shown !== `\u201c${q.text}\u201d`) err(rel, "Quotation.text differs from the visible quote"); const img = $(".jq .qp").attr("src"); const person = nodes.find(n => n["@id"] === q.creator["@id"]); if (!!img !== !!(person && person.image)) err(rel, "visible portrait and Person.image disagree"); }
    const art = nodes.find(n => n["@type"] === "Article" && n.mainEntityOfPage); if (art) { if (!art.headline || art.headline.length > 110) warn(rel, `Article headline length ${art.headline ? art.headline.length : 0}`); if (!art.author) err(rel, "Article without author"); }
  }
  // references must resolve to an @id defined somewhere on the site (on-page is preferred; off-page counts are reported)
  let offPage = 0; for (const [rel, w, id] of allRefs) { if (!registry.has(id)) err(rel, `${w}: reference to undefined @id ${id}`); }
  console.log(JSON.stringify({ pages: stats.pages, pagesWithJSONLD: stats.withLD, nodes: stats.nodes, distinctIds: registry.size, types: stats.types, offPageReferenceIds: offp.size, errors: errors.length, warnings: warnings.length }, null, 1));
  const agg = {}; for (const e of errors) { const k = e.replace(/^[^:]+: /, "").replace(/\[\d+\]/g, "[]").replace(/https?:\/\/\S+/g, "<url>"); agg[k] = (agg[k] || 0) + 1; } Object.entries(agg).sort((a, b) => b[1] - a[1]).slice(0, 25).forEach(([k, n]) => console.log(`ERROR x${n} ${k}`));
  errors.slice(0, 6).forEach(e => console.log("EXAMPLE " + e)); warnings.slice(0, 10).forEach(e => console.log("WARN " + e));
  process.exit(errors.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
