// Gatsby-free static generator for jod.mrm.org. Usage: node gen/build.js [outDir]
const fs = require("fs"), path = require("path"), crypto = require("crypto");
process.env.NODE_PATH = require("path").join(__dirname, "node_modules"); require("module").Module._initPaths();
const esbuild = require("esbuild");
const ROOT = path.resolve(__dirname, "..");
const OUT = path.resolve(process.argv[2] || path.join(ROOT, "dist"));
const SITE = "https://jod.mrm.org";
const NM = path.join(__dirname, "node_modules");

async function main() {
  const origErr = console.error;
  console.error = (...a) => { if (String(a[0]).includes("useLayoutEffect")) return; origErr(...a); };
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  await esbuild.build({
    entryPoints: [path.join(__dirname, "render.jsx")], bundle: true, platform: "node", format: "cjs",
    outfile: path.join(__dirname, ".cache/render.js"), jsx: "transform", loader: { ".js": "jsx", ".svg": "dataurl" },
    nodePaths: [NM], logLevel: "warning",
    alias: { gatsby: path.join(__dirname, "shims/gatsby.js"), "gatsby-image": path.join(__dirname, "shims/gatsby-image.js"), "@emotion/css/macro": "@emotion/css", "html-entities": path.join(__dirname, "shims/html-entities.js") },
    define: { "process.env.NODE_ENV": '"production"' },
  });
  const { render } = require(path.join(__dirname, ".cache/render.js"));
  const parse = require(path.join(ROOT, "parse-discourse.js"));
  const cheerio = require("cheerio");
  const { Html4Entities } = require("html-entities"); const ent = new Html4Entities();
  const slugify = t => t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  const prep = t => (t || "").replace(/\\'/g, "'").replace(/\\r/g, " ").replace(/\\n/g, " ");
  const plain = h => ent.decode(String(h || "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
  const all = JSON.parse(fs.readFileSync(path.join(ROOT, "data/jod.json"), "utf8"));
  const vols = Array.from({ length: 26 }, (_, i) => i + 1);

  // assets
  const sharp = require("sharp");
  fs.mkdirSync(path.join(OUT, "img/speakers"), { recursive: true });
  const speakersDir = path.join(ROOT, "src/images/speakers");
  const mugs = {};
  for (const f of fs.readdirSync(speakersDir)) {
    const buf = await sharp(path.join(speakersDir, f)).resize(160, 200, { fit: "cover" }).jpeg({ quality: 80 }).toBuffer();
    const h = crypto.createHash("sha1").update(buf).digest("hex").slice(0, 8);
    const name = `img/speakers/${f.replace(/\.jpg$/, "")}.${h}.jpg`;
    fs.writeFileSync(path.join(OUT, name), buf);
    mugs[`speakers/${f}`] = { src: "/" + name, width: 160, height: 200 };
  }
  const citeBuf = await sharp(path.join(ROOT, "src/images/cite.png")).resize(40, 40).png().toBuffer();
  const citeName = `img/cite.${crypto.createHash("sha1").update(citeBuf).digest("hex").slice(0, 8)}.png`;
  fs.writeFileSync(path.join(OUT, citeName), citeBuf);
  const citationImage = { childImageSharp: { fixed: { src: "/" + citeName, width: 20, height: 20 } } };
  const clientSrc = fs.readFileSync(path.join(__dirname, "client.js"));
  const clientName = `client.${crypto.createHash("sha1").update(clientSrc).digest("hex").slice(0, 10)}.js`;
  fs.writeFileSync(path.join(OUT, clientName), clientSrc);
  for (const d of ["icons"]) fs.cpSync(path.join(__dirname, "static", d), path.join(OUT, d), { recursive: true });
  for (const f of fs.readdirSync(path.join(__dirname, "static"))) if (f !== "icons") fs.cpSync(path.join(__dirname, "static", f), path.join(OUT, f), { recursive: true });

  const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const iconLinks = `<link rel="icon" href="/icons/icon-48x48.png"/><link rel="manifest" href="/manifest.webmanifest"/><meta name="theme-color" content="#122E51"/><link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png"/><link rel="sitemap" type="application/xml" href="/sitemap.xml"/><link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt"/>`;
  function page(file, r, extraHead, { pagefind = false, ogType = "website", canonical } = {}) {
    let body = r.body;
    if (pagefind) body = body.replace("<article ", '<article data-pagefind-body="" ');
    const og = `<meta property="og:url" content="${esc(canonical)}"/><meta property="og:site_name" content="Journal of Discourses"/><meta property="og:image" content="${SITE}/icons/icon-512x512.png"/><meta property="og:image:alt" content="Journal of Discourses"/><meta name="twitter:image" content="${SITE}/icons/icon-512x512.png"/>`;
    let head = r.head.replace(/(content="[^"]*?)\s+"/g, '$1"').replace('property="og:type" content="website"', `property="og:type" content="${ogType}"`).replace(/(rel="canonical" href=")[^"]*"/, `$1${esc(canonical)}"`);
    if (!head.includes('rel="canonical"')) head += `<link rel="canonical" href="${esc(canonical)}"/>`;
    const html = `<!DOCTYPE html><html ${r.htmlAttrs}><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>${head}${og}${iconLinks}${extraHead || ""}</head><body><div id="___gatsby"><div id="gatsby-focus-wrapper">${body}</div></div><script src="/${clientName}" defer></script></body></html>`;
    const p = path.join(OUT, file);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, html);
  }
  const norm = d => ({ id: d.id, volume: d.volume, start_page: d.start_page, end_page: d.end_page, date: d.date, speaker: d.speaker, title: d.title, mug: `speakers/${slugify(d.speaker)}.jpg` });
  const sets = vols.map(v => all.filter(d => d.volume === v));
  const urls = [];
  // volumes
  const volCtx = v => ({ pageContext: { volumeNumber: v, volumeNumbers: vols, discourses: sets[v - 1].map(norm) } });
  page("index.html", render("volume", "/", volCtx(1)), "", { canonical: `${SITE}/` });
  urls.push(`${SITE}/`);
  for (const v of vols) { page(`${v}/index.html`, render("volume", `/${v}/`, volCtx(v)), "", { canonical: `${SITE}/${v}/` }); urls.push(`${SITE}/${v}/`); }
  page("404.html", render("notfound", "/404/", {}), "", { canonical: `${SITE}/404/` });
  // discourses
  const fmtDate = d => { if (!d) return ""; const e = new Date(Date.UTC(+d.substr(0, 4), +d.substr(5, 2) - 1, +d.substr(8, 2))); return e.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }); };
  const nb = d => d && { volume: d.volume, page_header: d.page_header, speaker: d.speaker, start_page: d.start_page, end_page: d.end_page };
  const index = [], full = [];
  for (let x = 0; x < all.length; x++) {
    const d = all[x];
    const rel = `/${d.volume}/${d.start_page}/`, url = SITE + rel;
    const pages = parse(d.content);
    const mug = mugs[`speakers/${slugify(d.speaker)}.jpg`];
    const props = { data: { mug: mug ? { childImageSharp: { fixed: mug } } : null, citationImage },
      pageContext: { volumeNumber: d.volume, volumeNumbers: vols, discourse: { ...d, content: pages }, previousDiscourse: nb(all[x - 1]), nextDiscourse: nb(all[x + 1]) } };
    const r = render("discourse", rel, props);
    const title = plain(prep(d.title)), header = plain(prep(d.page_header)), subtitle = plain(prep(d.subtitle));
    const date = d.date ? d.date.slice(0, 10) : null;
    const cite = `${d.speaker}, "${header}", Journal of Discourses, vol. ${d.volume}, pp. ${d.start_page}-${d.end_page}${date ? ", " + fmtDate(d.date) : ""}.`;
    // markdown body from raw content
    const $ = cheerio.load(`<div id=r>${prep(d.content).replace(/\\/g, "")}</div>`, { decodeEntities: false });
    $("a").remove();
    const paras = []; $("#r p").each((_, p) => { const t = plain($(p).html()); if (t) paras.push(t); });
    const text = paras.join("\n\n");
    const md = `---\ntitle: ${JSON.stringify(title)}\nspeaker: ${JSON.stringify(d.speaker)}\ndate: ${date || ""}\nvolume: ${d.volume}\npages: ${d.start_page}-${d.end_page}\nreported_by: ${JSON.stringify(plain(prep(d.reported_by)))}\nurl: ${url}\ncitation: ${JSON.stringify(cite)}\nlicense: Public domain\n---\n\n# ${title}\n\n${subtitle}\n\n${text}\n`;
    const json = { id: d.id, url, volume: d.volume, start_page: d.start_page, end_page: d.end_page, title, subtitle, page_header: header, speaker: d.speaker, date, reported_by: plain(prep(d.reported_by)), citation: cite, license: "Public domain", text: paras };
    const ld = { "@context": "https://schema.org", "@type": "CreativeWork", name: title, headline: header, description: subtitle, author: { "@type": "Person", name: d.speaker }, dateCreated: date || undefined, url, inLanguage: "en", isPartOf: { "@type": "PublicationVolume", volumeNumber: String(d.volume), isPartOf: { "@type": "Periodical", name: "Journal of Discourses", url: SITE + "/" } }, pageStart: d.start_page, pageEnd: d.end_page, license: "https://creativecommons.org/publicdomain/mark/1.0/", encoding: [{ "@type": "MediaObject", encodingFormat: "text/markdown", contentUrl: SITE + rel + "index.md" }, { "@type": "MediaObject", encodingFormat: "application/json", contentUrl: SITE + rel + "index.json" }] };
    const extra = `<link rel="alternate" type="text/markdown" href="${rel}index.md"/><link rel="alternate" type="application/json" href="${rel}index.json"/><script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script><script type="application/json" id="jod-cite">${JSON.stringify({ text: cite }).replace(/</g, "\\u003c")}</script>`;
    page(`${d.volume}/${d.start_page}/index.html`, r, extra, { pagefind: true, ogType: "article", canonical: url });
    fs.writeFileSync(path.join(OUT, `${d.volume}/${d.start_page}/index.md`), md);
    fs.writeFileSync(path.join(OUT, `${d.volume}/${d.start_page}/index.json`), JSON.stringify(json));
    urls.push(url);
    index.push({ id: d.id, url, volume: d.volume, start_page: d.start_page, end_page: d.end_page, title, speaker: d.speaker, date });
    full.push(md);
  }
  // search page
  page("search/index.html", render("volume", "/search/", { pageContext: { volumeNumber: null, volumeNumbers: vols, discourses: [] } }), `<link href="/pagefind/pagefind-ui.css" rel="stylesheet"/><script src="/pagefind/pagefind-ui.js"></script><meta name="robots" content="noindex"/>`, { canonical: `${SITE}/search/` });
  // data + agent files
  fs.mkdirSync(path.join(OUT, "data"), { recursive: true });
  fs.writeFileSync(path.join(OUT, "data/index.json"), JSON.stringify(index));
  fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, "robots.txt"), `# Journal of Discourses: public-domain text (1854-1886). All crawlers and AI agents welcome.\nUser-agent: *\nAllow: /\nDisallow: /search/\n\nSitemap: ${SITE}/sitemap.xml\n`);
  let L = `# Journal of Discourses\n\n> Full text of the Journal of Discourses (26 volumes, 1854-1886): ${all.length} public sermons by LDS leaders, hosted by Mormonism Research Ministry (mrm.org). The text is public domain.\n\n- Each discourse: ${SITE}/<volume>/<start_page>/ (HTML), index.md (Markdown), index.json (JSON). Cite as "JD volume:page".\n- Full text by volume: ${SITE}/llms-full.txt\n- Index of all discourses: ${SITE}/data/index.json\n- MCP server (read-only, no auth, Streamable HTTP): ${SITE}/mcp\n\n`;
  for (const v of vols) { L += `## Volume ${v}\n\n`; for (const d of index.filter(i => i.volume === v)) L += `- [${d.title}](${d.url}index.md): ${d.speaker}${d.date ? ", " + d.date : ""} (JD ${v}:${d.start_page}-${d.end_page})\n`; L += "\n"; }
  fs.writeFileSync(path.join(OUT, "llms.txt"), L);
  fs.mkdirSync(path.join(OUT, "llms-full"), { recursive: true });
  let F = `# Journal of Discourses: full text (public domain)\n\n> The complete text is split by volume to keep files small. Each file is Markdown with front matter per discourse.\n\n`;
  for (const v of vols) { const body = full.filter((_, i) => index[i].volume === v).join("\n\n"); fs.writeFileSync(path.join(OUT, `llms-full/${v}.txt`), `# Journal of Discourses, volume ${v} (full text, public domain)\n\n` + body); F += `- [Volume ${v}](${SITE}/llms-full/${v}.txt)\n`; }
  fs.writeFileSync(path.join(OUT, "llms-full.txt"), F);
  require("child_process").execFileSync(path.join(NM, ".bin/pagefind"), ["--site", OUT, "--silent"], { stdio: "inherit" });
  console.log(`pages: ${urls.length} discourses: ${all.length} out: ${OUT}`);
}
main().catch(e => { console.error(e); process.exit(1); });
