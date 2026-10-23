// Build a static sharded inverted index (BM25-ready) for the MCP/API Worker. Output: <dist>/_idx/
const fs = require("fs"), path = require("path");
const dist = process.argv[2];
const STOP = new Set("a an and are as at be but by for from had has have he her him his i if in into is it its me my not of on or our she so that the their them then there they this to was we were what when which who will with you your all been do did no shall unto upon us".split(" "));
const tok = s => (s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]+/g) || []);
const docs = [], post = new Map();
for (const v of fs.readdirSync(dist).filter(x => /^\d+$/.test(x)).sort((a, b) => a - b))
  for (const p of fs.readdirSync(path.join(dist, v)).filter(x => /^\d+$/.test(x)).sort((a, b) => a - b)) {
    const f = path.join(dist, v, p, "index.json"); if (!fs.existsSync(f)) continue;
    const d = JSON.parse(fs.readFileSync(f, "utf8")); const i = docs.length;
    const body = tok(d.text.join(" ")), tt = tok(d.title + " " + d.page_header), sp = tok(d.speaker);
    docs.push({ id: d.id, v: d.volume, s: d.start_page, e: d.end_page, t: d.title, h: d.page_header, sp: d.speaker, d: d.date, u: d.url, c: d.citation, n: body.length });
    const tf = new Map();
    for (const w of body) if (!STOP.has(w)) tf.set(w, (tf.get(w) || 0) + 1);
    for (const w of tt) if (!STOP.has(w)) tf.set(w, (tf.get(w) || 0) + 8);
    for (const w of sp) tf.set(w, (tf.get(w) || 0) + 4);
    for (const [w, c] of tf) { if (!post.has(w)) post.set(w, []); post.get(w).push(i, c); }
  }
const out = path.join(dist, "_idx"); fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
const shards = {};
for (const [w, arr] of post) { const k = w.slice(0, 2).padEnd(2, "_"); (shards[k] = shards[k] || {})[w] = arr; }
let max = 0;
for (const [k, o] of Object.entries(shards)) { const s = JSON.stringify(o); max = Math.max(max, s.length); fs.writeFileSync(path.join(out, k + ".json"), s); }
const avg = docs.reduce((a, d) => a + d.n, 0) / docs.length;
fs.writeFileSync(path.join(out, "docs.json"), JSON.stringify({ avg, docs }));
console.log("docs", docs.length, "terms", post.size, "shards", Object.keys(shards).length, "largest shard", max);
