// Build-time Open Graph share images (1200x630 PNG) via satori + resvg, cached by content hash.
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const { Resvg } = require("@resvg/resvg-js");
const FONT_R = fs.readFileSync(path.join(__dirname, "fonts/LiberationSerif-Regular.ttf"));
const FONT_B = fs.readFileSync(path.join(__dirname, "fonts/LiberationSerif-Bold.ttf"));
const CACHE = path.join(__dirname, ".cache/og"); fs.mkdirSync(CACHE, { recursive: true });
let satori;
const h = (type, style, children) => ({ type, props: { style, children } });
async function ogImage({ title, speaker, date, ref, max = 150, quote = false, portrait = null }) {
  satori = satori || (await import("satori")).default;
  const key = crypto.createHash("sha1").update(JSON.stringify(["v5", title, speaker, date, ref, max, quote, portrait ? crypto.createHash("sha1").update(portrait).digest("hex") : null])).digest("hex");
  const cached = path.join(CACHE, key + ".png");
  if (fs.existsSync(cached)) return fs.readFileSync(cached);
  // Truncate on a sentence end if one falls in the second half of the budget, otherwise on a whole word; never mid-word.
  const clipTo = (s, n) => {
    if (s.length <= n) return s;
    const head = s.slice(0, n), sent = head.match(/^[\s\S]*[.!?]["\u201d\u2019]?(?=\s)/);
    if (sent && sent[0].length >= n * 0.5 && !/\b(Mr|Mrs|Dr|St|Jr|Sr|Gen|Col|Gov|Rev|Capt|Prof|vs|No|Esq|Bro|Pres)\.["\u201d\u2019]?$/.test(sent[0])) return { t: sent[0], ell: false };
    const w = /\s/.test(s[n]) ? head : head.replace(/\s+\S*$/, "");
    return { t: w.replace(/[\s,;:\u2014\u2013-]+$/, ""), ell: true };
  };
  const c = title.length > max ? clipTo(quote ? title.replace(/\u201d$/, "") : title, max - 1) : null;
  const t = c ? (quote ? c.t.replace(/^\u201c?/, "\u201c") + (c.ell ? "\u2026" : "") + "\u201d" : c.t + (c.ell ? "\u2026" : "")) : title;
  const size = quote ? (t.length > 200 ? 38 : t.length > 140 ? 44 : 50) : t.length > 100 ? 48 : t.length > 60 ? 58 : 68;
  const tree = h("div", { width: 1200, height: 630, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#052f54", color: "#ffffff", fontFamily: "Serif" }, [
    h("div", { display: "flex", fontSize: 30, letterSpacing: 4, color: "#b7c5d7" }, "JOURNAL OF DISCOURSES"),
    h("div", { display: "flex", fontSize: size, fontWeight: quote ? 400 : 700, lineHeight: quote ? 1.3 : 1.15 }, t),
    h("div", { display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 34 }, [
      h("div", { display: "flex", alignItems: "center" }, [
        portrait ? { type: "img", props: { src: portrait, width: 112, height: 112, style: { width: 112, height: 112, borderRadius: 56, objectFit: "cover", marginRight: 28, border: "3px solid #b7c5d7" } } } : null,
        h("div", { display: "flex", flexDirection: "column" }, [h("div", { display: "flex" }, speaker), h("div", { display: "flex", fontSize: 28, color: "#b7c5d7", marginTop: 6 }, date || "")]),
      ].filter(Boolean)),
      h("div", { display: "flex", color: "#f1ae46", fontWeight: 700 }, ref),
    ]),
  ]);
  const svg = await satori(tree, { width: 1200, height: 630, fonts: [{ name: "Serif", data: FONT_R, weight: 400 }, { name: "Serif", data: FONT_B, weight: 700 }] });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  fs.writeFileSync(cached, png);
  return png;
}
module.exports = { ogImage };
