// Phase 1 post-process: copies public/ -> out/, adds headers, robots, llms.txt, OG/X meta.
const fs = require('fs'), path = require('path');
const [src, out] = process.argv.slice(2);
const SITE = 'https://jod.mrm.org';
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(src, out, { recursive: true });
for (const f of fs.readdirSync(out)) if (f.endsWith('.map') || f === 'webpack.stats.json') fs.rmSync(path.join(out, f));
const esc = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
let n = 0;
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== 'page-data' && e.name !== 'static') walk(p); continue; }
    if (e.name !== 'index.html' && e.name !== '404.html') continue;
    let h = fs.readFileSync(p, 'utf8');
    if (h.includes('og:url')) continue;
    // trim stray newline inside description attributes
    h = h.replace(/(content="[^"]*?)\s+"/g, '$1"');
    const can = (h.match(/rel="canonical" href="([^"]+)"/) || [])[1] || (SITE + '/' + path.relative(out, path.dirname(p)).replace(/\\/g,'/')).replace(/\/$/, '');
    const isDiscourse = /^\/\d+\/\d+$/.test(can.replace(SITE, ''));
    h = h.replace('property="og:type" content="website"', `property="og:type" content="${isDiscourse ? 'article' : 'website'}"`);
    const add = [
      `<meta property="og:url" content="${esc(can)}"/>`,
      `<meta property="og:site_name" content="Journal of Discourses"/>`,
      `<meta property="og:image" content="${SITE}/icons/icon-512x512.png"/>`,
      `<meta property="og:image:alt" content="Journal of Discourses"/>`,
      `<meta name="twitter:image" content="${SITE}/icons/icon-512x512.png"/>`,
      `<link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt"/>`,
    ];
    if (!h.includes('rel="canonical"')) add.unshift(`<link rel="canonical" href="${esc(can)}"/>`);
    h = h.replace('</head>', add.join('') + '</head>');
    fs.writeFileSync(p, h); n++;
  }
}
walk(out);
fs.writeFileSync(path.join(out, '_headers'), `/*.js
  Cache-Control: public, max-age=31536000, immutable
/static/*
  Cache-Control: public, max-age=31536000, immutable
/icons/*
  Cache-Control: public, max-age=2592000
/sw.js
  Cache-Control: public, max-age=0, must-revalidate
/page-data/*
  Cache-Control: public, max-age=300, s-maxage=86400
/*
  X-Content-Type-Options: nosniff
`);
// HTML: browser 5 min, edge 1 day. _headers can't match "html only", so set per-dir defaults via catch-all on paths without extension is not possible; keep HTML default (must-revalidate + ETag) which is cheap for static assets.
fs.writeFileSync(path.join(out, 'robots.txt'), `# Journal of Discourses: public-domain text (1854-1886). All crawlers and AI agents welcome.
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
// llms.txt from data
const data = JSON.parse(fs.readFileSync(path.join(src, '..', 'data', 'jod.json'), 'utf8'));
const arr = Array.isArray(data) ? data : Object.values(data);
const ent = t => String(t||'').replace(/&mdash;/g,'\u2014').replace(/&ndash;/g,'\u2013').replace(/&amp;/g,'&').replace(/&#39;|&rsquo;/g,"'").replace(/&quot;|&ldquo;|&rdquo;/g,'"').replace(/<[^>]+>/g,'').trim();
const vols = {};
for (const d of arr) (vols[d.volume] = vols[d.volume] || []).push(d);
let L = `# Journal of Discourses\n\n> Full text of the Journal of Discourses (26 volumes, 1854-1886): ~${arr.length} public sermons by LDS leaders, published by mrm.org. Text is public domain.\n\nURL scheme: ${SITE}/<volume>/<start_page> is one discourse; ${SITE}/<volume> lists a volume. Cite as "JD volume:page".\n\n`;
for (const v of Object.keys(vols).sort((a,b)=>a-b)) {
  L += `## Volume ${v}\n\n`;
  for (const d of vols[v].sort((a,b)=>a.start_page-b.start_page))
    L += `- [${ent(d.title)||'Untitled'}](${SITE}/${v}/${d.start_page}): ${ent(d.speaker)}${d.date ? ', ' + String(d.date).slice(0,10) : ''} (JD ${v}:${d.start_page}${d.end_page && d.end_page!=d.start_page ? '-' + d.end_page : ''})\n`;
  L += '\n';
}
fs.writeFileSync(path.join(out, 'llms.txt'), L);
console.log('html patched', n, 'discourses', arr.length);
