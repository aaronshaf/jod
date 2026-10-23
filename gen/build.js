// Gatsby-free static generator for jod.mrm.org. Usage: node gen/build.js [outDir]
const fs = require("fs"), path = require("path"), crypto = require("crypto");
process.env.NODE_PATH = require("path").join(__dirname, "node_modules"); require("module").Module._initPaths();
const esbuild = require("esbuild");
const ROOT = path.resolve(__dirname, "..");
const OUT = path.resolve(process.argv[2] || path.join(ROOT, "dist"));
const SITE = "https://jod.mrm.org";
const BUILD_ID = Date.now().toString(36);
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
  const { ogImage } = require("./og.js");
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
  const clientSrc = Buffer.concat([fs.readFileSync(path.join(__dirname, "client.js")), Buffer.from("\n"), fs.readFileSync(path.join(__dirname, "search-client.js"))]);
  const clientName = `client.${crypto.createHash("sha1").update(clientSrc).digest("hex").slice(0, 10)}.js`;
  fs.writeFileSync(path.join(OUT, clientName), clientSrc);
  for (const d of ["icons"]) fs.cpSync(path.join(__dirname, "static", d), path.join(OUT, d), { recursive: true });
  for (const f of fs.readdirSync(path.join(__dirname, "static"))) if (f !== "icons") fs.cpSync(path.join(__dirname, "static", f), path.join(OUT, f), { recursive: true });

  const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const iconLinks = `<script type="speculationrules">{"prefetch":[{"where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/api/*","/mcp","/mcp/*","/_idx/*","/*.md","/*.json","/*.txt"]}}]},"eagerness":"moderate"}],"prerender":[{"where":{"selector_matches":"a[rel~=next], a[rel~=prev], nav a[title*=' by ']"},"eagerness":"moderate"}]}</script><link rel="icon" href="/icons/icon-48x48.png"/><link rel="manifest" href="/manifest.webmanifest"/><meta name="theme-color" content="#122E51"/><link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png"/><link rel="sitemap" type="application/xml" href="/sitemap.xml"/><link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt"/>`;
  function page(file, r, extraHead, { pagefind = false, ogType = "website", canonical, image, pfTitle, pfExtra } = {}) {
    let body = r.body;
        if (pagefind) body = body.replace(/<article ([^>]*)>/, (m0, attrs) => `<article data-pagefind-body=""${pfTitle ? ` data-pagefind-meta="title:${esc(pfTitle)}"` : ""} ${attrs}>${(pfExtra || []).map(([k, a, v]) => `<span data-pagefind-${k}="${a}:${esc(v)}"></span>`).join("")}`);
    const og = `<meta property="og:url" content="${esc(canonical)}"/><meta property="og:site_name" content="Journal of Discourses"/>${image ? `<meta property="og:image" content="${image}"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta name="twitter:image" content="${image}"/>` : `<meta property="og:image" content="${SITE}/icons/icon-512x512.png"/><meta name="twitter:image" content="${SITE}/icons/icon-512x512.png"/>`}<meta property="og:image:alt" content="Journal of Discourses"/>`;
    let head = (image ? r.head.replace('name="twitter:card" content="summary"', 'name="twitter:card" content="summary_large_image"') : r.head).replace(/(rel="(?:prev|next|parent)" href="https:\/\/jod\.mrm\.org\/[0-9/]*[0-9])"/g, "$1/\"").replace(/(content="[^"]*?)\s+"/g, '$1"').replace('property="og:type" content="website"', `property="og:type" content="${ogType}"`).replace(/(rel="canonical" href=")[^"]*"/, `$1${esc(canonical)}"`);
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
  const index = [], full = [], bulk = [];
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
    const crumbs = { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Journal of Discourses", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: `Volume ${d.volume}`, item: `${SITE}/${d.volume}/` }, { "@type": "ListItem", position: 3, name: title, item: url }] };
    ld.image = url + "og.png"; ld.publisher = { "@type": "Organization", name: "Mormonism Research Ministry", url: "https://www.mrm.org/" }; ld.mainEntityOfPage = url;
    const ldAll = { "@context": "https://schema.org", "@graph": [Object.assign({}, ld, { "@context": undefined }), crumbs] };
    const extra = `<link rel="alternate" type="text/markdown" href="${rel}index.md"/><link rel="alternate" type="application/json" href="${rel}index.json"/><script type="application/ld+json">${JSON.stringify(ldAll).replace(/</g, "\\u003c")}</script><script type="application/json" id="jod-cite">${JSON.stringify({ text: cite }).replace(/</g, "\\u003c")}</script>`;
    const png = await ogImage({ title, speaker: d.speaker, date: d.date ? fmtDate(d.date) : "", ref: `JD ${d.volume}:${d.start_page}-${d.end_page}` });
    fs.mkdirSync(path.join(OUT, `${d.volume}/${d.start_page}`), { recursive: true });
    fs.writeFileSync(path.join(OUT, `${d.volume}/${d.start_page}/og.png`), png);
    page(`${d.volume}/${d.start_page}/index.html`, r, extra, { pfTitle: title, pfExtra: [["filter", "speaker", d.speaker], ["filter", "volume", String(d.volume)], ["meta", "speaker", d.speaker], ["meta", "date", d.date ? fmtDate(d.date) : ""], ["meta", "ref", `JD ${d.volume}:${d.start_page}-${d.end_page}`], ["sort", "order", String(d.volume * 10000 + d.start_page).padStart(7, "0")]], pagefind: true, ogType: "article", canonical: url, image: url + "og.png" });
    fs.writeFileSync(path.join(OUT, `${d.volume}/${d.start_page}/index.md`), md);
    fs.writeFileSync(path.join(OUT, `${d.volume}/${d.start_page}/index.json`), JSON.stringify(json));
    urls.push(url);
    index.push({ id: d.id, url, volume: d.volume, start_page: d.start_page, end_page: d.end_page, title, speaker: d.speaker, date });
    full.push(md);
    bulk.push(json);
  }
  // search page
  {
    const r = render("volume", "/search/", { pageContext: { volumeNumber: null, volumeNumbers: vols, discourses: [] } });
    const main = `<main><div id="jod-search" class="js-search" role="search"><div class="js-bar"><input type="search" aria-label="Search the Journal of Discourses" placeholder="Search 1,426 discourses" autocomplete="off" spellcheck="false"/><select id="js-speaker" aria-label="Speaker"><option value="">All speakers</option></select><select id="js-volume" aria-label="Volume"><option value="">All volumes</option></select></div><div class="js-meta" aria-live="polite"></div><ol class="js-list" hidden></ol><button class="js-more" type="button" hidden>More results</button><div class="js-empty">Search the full text of all 26 volumes. Quote words for an exact phrase. Try <a href="/search/?q=plan+of+salvation">plan of salvation</a>, <a href="/search/?q=adam+god">adam god</a>, or <a href="/search/?q=united+order">united order</a>. Press / to focus the box.</div></div></main>`;
    r.body = r.body.replace(/<main>[\s\S]*<\/main>/, main);
    r.head = r.head.replace(/<title[^>]*>[^<]*<\/title>/, "<title>Search · Journal of Discourses</title>");
    page("search/index.html", r, `<style>${fs.readFileSync(path.join(__dirname, "search.css"), "utf8")}</style><meta name="robots" content="noindex"/><script>window.JOD_PF="/pagefind/${BUILD_ID}/"</script>`, { canonical: `${SITE}/search/` });
  }
  // quotes: deterministic selection of short quotable paragraphs, one per discourse, 366 total
  {
    const hash = x => crypto.createHash("sha1").update(x).digest("hex");
    const picks = [];
    for (const j of bulk) {
      const cands = j.text.map((t, i) => ({ t, i })).filter(o => o.t.length >= 120 && o.t.length <= 260 && /^[A-Z"]/.test(o.t) && /[.!?]"?$/.test(o.t) && !/\d{3,}|Reported by|Journal of Discourses/i.test(o.t));
      if (!cands.length) continue;
      cands.sort((a, b) => hash(j.id + a.i) < hash(j.id + b.i) ? -1 : 1);
      picks.push({ j, ...cands[0] });
    }
    picks.sort((a, b) => hash("q" + a.j.id) < hash("q" + b.j.id) ? -1 : 1);
    const quotes = picks.slice(0, 366).map((o, n) => ({ n: n + 1, text: o.t, speaker: o.j.speaker, date: o.j.date, title: o.j.title, ref: `JD ${o.j.volume}:${o.j.start_page}-${o.j.end_page}`, source: o.j.url, url: `${SITE}/quotes/${n + 1}/` }));
    const qcss = `<style>.jq{max-width:760px;margin:24px auto;padding:0 16px}.jq blockquote{margin:0;background:#fff;border:1px solid #e3e1ce;padding:28px 32px;font-family:Georgia,"Times New Roman",serif;font-size:1.35rem;line-height:1.5;color:#000e1a}.jq .by{margin-top:14px;font-size:.92rem;color:#5a5a50}.jq .by a{color:#052f54}.jq .ref{color:#8a6a2a}.jq nav{display:flex;justify-content:space-between;margin-top:14px;font-size:.86rem}.jq nav a{color:#0066cc}@media(max-width:600px){.jq blockquote{padding:20px;font-size:1.15rem}}</style>`;
    const shell = (pathName) => render("volume", pathName, { pageContext: { volumeNumber: null, volumeNumbers: vols, discourses: [] } });
    for (const q of quotes) {
      const r = shell(`/quotes/${q.n}/`);
      const dt = q.date ? fmtDate(q.date) : "";
      r.body = r.body.replace(/<main>[\s\S]*<\/main>/, `<main><div class="jq"><blockquote>\u201c${esc(q.text)}\u201d<div class="by">${esc(q.speaker)}${dt ? ", " + dt : ""} \u00b7 <a href="${q.source.replace(SITE, "")}">${esc(q.title)}</a> \u00b7 <span class="ref">${q.ref}</span></div></blockquote><nav><a href="/quotes/${q.n > 1 ? q.n - 1 : quotes.length}/" rel="prev">Previous quote</a><a href="/quotes/">All quotes</a><a href="/quotes/${q.n < quotes.length ? q.n + 1 : 1}/" rel="next">Next quote</a></nav></div></main>`);
      const desc = `${q.speaker}, ${q.ref}`;
      r.head = r.head.replace(/<title[^>]*>[^<]*<\/title>/, `<title>\u201c${esc(q.text.slice(0, 90))}\u2026\u201d \u2014 ${esc(q.speaker)}</title>`).replace(/(name="description" content=")[^"]*"/, `$1${esc(q.text)}"`).replace(/(property="og:title" content=")[^"]*"/, `$1${esc(q.speaker + " (" + q.ref + ")")}"`).replace(/(property="og:description" content=")[^"]*"/, `$1${esc(q.text)}"`).replace(/(name="twitter:title" content=")[^"]*"/, `$1${esc(q.speaker + " (" + q.ref + ")")}"`).replace(/(name="twitter:description" content=")[^"]*"/, `$1${esc(q.text)}"`);
      const png = await ogImage({ title: `\u201c${q.text}\u201d`, speaker: q.speaker, date: dt, ref: q.ref, max: 270, quote: true });
      fs.mkdirSync(path.join(OUT, `quotes/${q.n}`), { recursive: true });
      fs.writeFileSync(path.join(OUT, `quotes/${q.n}/og.png`), png);
      const qld = { "@context": "https://schema.org", "@type": "Quotation", text: q.text, spokenByCharacter: { "@type": "Person", name: q.speaker }, isPartOf: q.source.split("#")[0], url: q.url };
      page(`quotes/${q.n}/index.html`, r, qcss + `<link rel="alternate" type="application/atom+xml" title="Journal of Discourses: quote of the day" href="/feed/quotes.xml"/><script type="application/ld+json">${JSON.stringify(qld).replace(/</g, "\\u003c")}</script>`, { ogType: "article", canonical: q.url, image: q.url + "og.png" });
    }
    { const r = shell("/quotes/"); r.body = r.body.replace(/<main>[\s\S]*<\/main>/, `<main><div class="jq"><h2>Quotes from the Journal of Discourses</h2><p style="color:#5a5a50;font-size:.92rem">One short passage per day. Feed: <a href="/feed/quotes.xml">/feed/quotes.xml</a>. Today: <a href="/quote/">/quote/</a>.</p><ol style="background:#fff;border:1px solid #e3e1ce;padding:12px 12px 12px 48px;line-height:1.5">${quotes.map(q => `<li style="margin:8px 0"><a href="/quotes/${q.n}/" style="color:#052f54;text-decoration:none">${esc(q.text.slice(0, 110))}\u2026</a> <span style="color:#5a5a50;font-size:.86rem">${esc(q.speaker)}, <span class="ref">${q.ref}</span></span></li>`).join("")}</ol></div></main>`);
      r.head = r.head.replace(/<title[^>]*>[^<]*<\/title>/, "<title>Quotes \u00b7 Journal of Discourses</title>");
      page("quotes/index.html", r, qcss + `<link rel="alternate" type="application/atom+xml" href="/feed/quotes.xml"/>`, { canonical: `${SITE}/quotes/` }); }
    { const r = shell("/quote/"); r.body = r.body.replace(/<main>[\s\S]*<\/main>/, `<main><div class="jq"><p>Loading today\u2019s quote\u2026 <a href="/quotes/">All quotes</a></p></div></main>`);
      page("quote/index.html", r, `<meta name="robots" content="noindex"/><script>(function(){var p=new Date().toLocaleDateString("en-CA",{timeZone:"America/Denver"}).split("-").map(Number);var d=Math.round((Date.UTC(p[0],p[1]-1,p[2])-Date.UTC(2026,0,1))/864e5);location.replace("/quotes/"+(((d%${quotes.length})+${quotes.length})%${quotes.length}+1)+"/")})()</script>`, { canonical: `${SITE}/quote/` }); }
    fs.mkdirSync(path.join(OUT, "_idx"), { recursive: true });
    fs.writeFileSync(path.join(OUT, "quotes.json"), JSON.stringify(quotes.map(q => ({ n: q.n, text: q.text, speaker: q.speaker, date: q.date ? fmtDate(q.date) : "", title: q.title, ref: q.ref, source: q.source.replace(SITE, ""), url: `/quotes/${q.n}/` }))));
    // home page: volume 1 list plus today's quote (static = build day in America/Denver; client swaps to the visitor's Denver date)
    {
      const denverDay = ms => { const [y, m, d] = new Date(ms).toLocaleDateString("en-CA", { timeZone: "America/Denver" }).split("-").map(Number); return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(2026, 0, 1)) / 864e5); };
      const q = quotes[((denverDay(Date.now()) % quotes.length) + quotes.length) % quotes.length];
      const dt = q.date ? fmtDate(q.date) : "";
      const block = `<section id="jod-qotd" style="max-width:960px;margin:16px auto 0;padding:0 16px;box-sizing:border-box" aria-label="Quote of the day"><div style="background:#fff;border:1px solid #e3e1ce;border-left:3px solid #f1ae46;padding:16px 20px"><div style="font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#5a5a50">Quote of the day</div><blockquote data-q="text" style="margin:8px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:1.15rem;line-height:1.5;color:#000e1a">\u201c${esc(q.text)}\u201d</blockquote><div style="margin-top:8px;font-size:.86rem;color:#5a5a50"><span data-q="by">${esc(q.speaker)}${dt ? ", " + dt : ""}</span> \u00b7 <a data-q="source" href="${q.source.replace(SITE, "")}" style="color:#052f54">${esc(q.title.length > 70 ? q.title.slice(0, 67) + "\u2026" : q.title)}</a> <span data-q="ref" style="color:#8a6a2a">${q.ref}</span> \u00b7 <a data-q="perma" href="/quotes/${q.n}/" style="color:#0066cc">Permalink</a></div></div></section>`;
      const r = shell("/");
      const vinfo = vols.map(v => { const ds = index.filter(i => i.volume === v), ys = ds.map(i => i.date && +i.date.slice(0, 4)).filter(Boolean); return { v, n: ds.length, y0: Math.min(...ys), y1: Math.max(...ys) }; });
      const vcss = `<style>.jv{max-width:960px;margin:16px auto 32px;padding:0 16px;box-sizing:border-box}.jv h2{font-size:1.1rem;font-weight:normal;color:#5a5a50;margin:20px 2px 8px}.jv ul{list-style:none;margin:0;padding:1px;display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:1px}.jv li{outline:1px solid #e3e1ce}.jv li a{display:flex;justify-content:space-between;align-items:baseline;gap:8px;background:#fff;padding:10px 14px;text-decoration:none;color:#000e1a}.jv li a:hover{background:#faf9f3}.jv .vn{font-family:Georgia,"Times New Roman",serif;font-size:1.05rem;color:#052f54}.jv .vm{font-size:.8rem;color:#5a5a50;white-space:nowrap}@media(max-width:600px){.jv ul{grid-template-columns:1fr}.jv li a{padding:9px 14px}}</style>`;
      const vlist = `<div class="jv"><h2>Volumes</h2><ul>${vinfo.map(x => `<li><a href="/${x.v}/"><span class="vn">Volume ${x.v}</span><span class="vm">${x.y0 === x.y1 ? x.y0 : x.y0 + "\u2013" + String(x.y1).slice(2)} \u00b7 ${x.n}</span></a></li>`).join("")}</ul><p style="font-size:.8rem;color:#5a5a50;margin:8px 2px">Years and number of discourses per volume. <a href="/quotes/" style="color:#0066cc">All quotes</a> \u00b7 <a href="/search/" style="color:#0066cc">Search</a> \u00b7 <a href="/data/README.md" style="color:#0066cc">Bulk data</a></p></div>`;
      r.body = r.body.replace(/<main>[\s\S]*<\/main>/, "<main>" + block + vlist + "</main>");
      r.head = r.head.replace(/<title[^>]*>[^<]*<\/title>/, "<title>Journal of Discourses: public sermons by Mormon leaders, 1851-1886</title>").replace(/(name="description" content=")[^"]*"/, `$1Full text of all 26 volumes of the Journal of Discourses. Today: \u201c${esc(q.text.slice(0, 120))}\u2026\u201d (${esc(q.speaker)}, ${q.ref})"`);
      page("index.html", r, vcss + `<link rel="alternate" type="application/atom+xml" title="Journal of Discourses: quote of the day" href="/feed/quotes.xml"/>`, { canonical: `${SITE}/`, image: `${SITE}/quotes/${q.n}/og.png` });
    }
    urls.push(`${SITE}/quotes/`, ...quotes.map(q => q.url));
  }
  // bulk data download
  {
    const zlib = require("zlib");
    fs.mkdirSync(path.join(OUT, "data"), { recursive: true });
    fs.writeFileSync(path.join(OUT, "data/jod.json.gz"), zlib.gzipSync(JSON.stringify(bulk), { level: 9 }));
    const { DatabaseSync } = require("node:sqlite");
    const dbPath = path.join(__dirname, ".cache/jod.sqlite"); fs.rmSync(dbPath, { force: true });
    const db = new DatabaseSync(dbPath);
    db.exec(`CREATE TABLE discourses (id TEXT PRIMARY KEY, volume INTEGER, start_page INTEGER, end_page INTEGER, title TEXT, subtitle TEXT, page_header TEXT, speaker TEXT, date TEXT, reported_by TEXT, url TEXT, citation TEXT);
      CREATE TABLE paragraphs (discourse_id TEXT, n INTEGER, text TEXT, PRIMARY KEY (discourse_id, n));`);
    const ins = db.prepare("INSERT INTO discourses VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"), insp = db.prepare("INSERT INTO paragraphs VALUES (?,?,?)");
    db.exec("BEGIN");
    for (const j of bulk) { ins.run(j.id, j.volume, j.start_page, j.end_page, j.title, j.subtitle, j.page_header, j.speaker, j.date, j.reported_by, j.url, j.citation); j.text.forEach((t, i) => insp.run(j.id, i + 1, t)); }
    db.exec("COMMIT");
    db.exec("VACUUM");
    db.close();
    fs.writeFileSync(path.join(OUT, "data/jod.sqlite.gz"), zlib.gzipSync(fs.readFileSync(dbPath), { level: 9 }));
    fs.writeFileSync(path.join(OUT, "data/README.md"), `# Journal of Discourses: bulk data\n\nThe sermon text (1854-1886) is in the public domain. Metadata and markup by mrm.org are dedicated to the public domain (CC0). Attribution to https://jod.mrm.org/ is appreciated.\n\n- [jod.json.gz](${SITE}/data/jod.json.gz): array of discourses (id, url, volume, start_page, end_page, title, subtitle, page_header, speaker, date, reported_by, citation, text[] paragraphs).\n- [jod.sqlite.gz](${SITE}/data/jod.sqlite.gz): SQLite with tables \`discourses\` (metadata) and \`paragraphs\` (discourse_id, n, text). For full-text search run: \`CREATE VIRTUAL TABLE paragraphs_fts USING fts5(text, content='paragraphs'); INSERT INTO paragraphs_fts(paragraphs_fts) VALUES('rebuild');\`\n- [index.json](${SITE}/data/index.json): metadata only.\n- Per discourse: \`/<volume>/<page>/index.md\` and \`index.json\`.\n- MCP server: ${SITE}/mcp\n`);
  }
  // data + agent files
  fs.mkdirSync(path.join(OUT, "data"), { recursive: true });
  fs.writeFileSync(path.join(OUT, "data/index.json"), JSON.stringify(index));
  fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, "robots.txt"), `# Journal of Discourses: public-domain text (1854-1886). All crawlers and AI agents welcome.\nUser-agent: *\nAllow: /\nDisallow: /search/\nDisallow: /_idx/\n\nSitemap: ${SITE}/sitemap.xml\n`);
  let L = `# Journal of Discourses\n\n> Full text of the Journal of Discourses (26 volumes, 1854-1886): ${all.length} public sermons by LDS leaders, hosted by Mormonism Research Ministry (mrm.org). The text is public domain.\n\n- Each discourse: ${SITE}/<volume>/<start_page>/ (HTML), index.md (Markdown), index.json (JSON). Cite as "JD volume:page".\n- Full text by volume: ${SITE}/llms-full.txt\n- Index of all discourses: ${SITE}/data/index.json\n- Bulk download (public domain): ${SITE}/data/jod.json.gz and ${SITE}/data/jod.sqlite.gz (see ${SITE}/data/README.md)\n- Quotes: ${SITE}/quotes/ and feed ${SITE}/feed/quotes.xml\n- MCP server (read-only, no auth, Streamable HTTP): ${SITE}/mcp\n\n`;
  for (const v of vols) { L += `## Volume ${v}\n\n`; for (const d of index.filter(i => i.volume === v)) L += `- [${d.title}](${d.url}index.md): ${d.speaker}${d.date ? ", " + d.date : ""} (JD ${v}:${d.start_page}-${d.end_page})\n`; L += "\n"; }
  fs.writeFileSync(path.join(OUT, "llms.txt"), L);
  fs.mkdirSync(path.join(OUT, "llms-full"), { recursive: true });
  let F = `# Journal of Discourses: full text (public domain)\n\n> The complete text is split by volume to keep files small. Each file is Markdown with front matter per discourse.\n\n`;
  for (const v of vols) { const body = full.filter((_, i) => index[i].volume === v).join("\n\n"); fs.writeFileSync(path.join(OUT, `llms-full/${v}.txt`), `# Journal of Discourses, volume ${v} (full text, public domain)\n\n` + body); F += `- [Volume ${v}](${SITE}/llms-full/${v}.txt)\n`; }
  fs.writeFileSync(path.join(OUT, "llms-full.txt"), F);
  require("child_process").execFileSync(process.execPath, [path.join(__dirname, "search-index.js"), OUT], { stdio: "inherit" });
  require("child_process").execFileSync(path.join(NM, ".bin/pagefind"), ["--site", OUT, "--output-path", path.join(OUT, "pagefind", BUILD_ID), "--silent"], { stdio: "inherit" });
  console.log(`pages: ${urls.length} discourses: ${all.length} out: ${OUT}`);
}
main().catch(e => { console.error(e); process.exit(1); });
