// Compare Gatsby snapshot vs new build: same HTML paths, same title/meta description, same visible text in <main>/<header>, same internal link targets.
process.env.NODE_PATH = require("path").join(__dirname, "node_modules"); require("module").Module._initPaths();
const fs = require("fs"), path = require("path"), cheerio = require("cheerio");
const [A, B] = process.argv.slice(2);
const list = (root) => { const out = []; (function w(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) { if (!["page-data", "static", "pagefind"].includes(e.name)) w(p); } else if (e.name.endsWith(".html")) out.push(path.relative(root, p)); } })(root); return out.sort(); };
const la = list(A), lb = new Set(list(B));
const missing = la.filter(f => !lb.has(f)); const extra = [...lb].filter(f => !la.includes(f));
const sig = (f) => {
  const $ = cheerio.load(fs.readFileSync(f, "utf8"));
  $("style,script,noscript").remove();
  const t = s => s.replace(/\s+/g, " ").trim();
  const links = $("main a[href], header a[href], nav a[href]").map((_, a) => $(a).attr("href").replace(/\/(#|$)/, "$1")).get().join(" ");
  const imgs = $("main img").length;
  return { title: $("title").text(), desc: t($('meta[name="description"]').attr("content") || ""), header: t($("header").text()), main: t($("main").text()), links, footer: t($("footer").text()) };
};
let diffs = 0, checked = 0; const samples = [];
for (const f of la) { if (!lb.has(f)) continue; checked++;
  const a = sig(path.join(A, f)), b = sig(path.join(B, f));
  for (const k of Object.keys(a)) if (a[k] !== b[k]) { diffs++; if (samples.length < 8) { const sa = String(a[k]), sb = String(b[k]); let i = 0; while (i < sa.length && sa[i] === sb[i]) i++; samples.push(`${f} [${k}] gatsby=…${sa.slice(Math.max(0, i - 40), i + 80)}… new=…${sb.slice(Math.max(0, i - 40), i + 80)}…`); } }
}
console.log(JSON.stringify({ snapshotPages: la.length, checked, missing, extraCount: extra.length, extra: extra.slice(0, 5), fieldDiffs: diffs }, null, 1)); samples.forEach(s => console.log(s));
