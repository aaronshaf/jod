// Build-time Open Graph share images (1200x630 PNG) via satori + resvg, cached by content hash.
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const { Resvg } = require("@resvg/resvg-js");
const FONT_R = fs.readFileSync(path.join(__dirname, "fonts/LiberationSerif-Regular.ttf"));
const FONT_B = fs.readFileSync(path.join(__dirname, "fonts/LiberationSerif-Bold.ttf"));
const CACHE = path.join(__dirname, ".cache/og"); fs.mkdirSync(CACHE, { recursive: true });
let satori;
const h = (type, style, children) => ({ type, props: { style, children } });
async function ogImage({ title, speaker, date, ref, max = 150, quote = false }) {
  satori = satori || (await import("satori")).default;
  const key = crypto.createHash("sha1").update(JSON.stringify(["v2", title, speaker, date, ref, max, quote])).digest("hex");
  const cached = path.join(CACHE, key + ".png");
  if (fs.existsSync(cached)) return fs.readFileSync(cached);
  const t = title.length > max ? title.slice(0, max - 3).replace(/\s+\S*$/, "") + "…" : title;
  const size = quote ? (t.length > 200 ? 38 : t.length > 140 ? 44 : 50) : t.length > 100 ? 48 : t.length > 60 ? 58 : 68;
  const tree = h("div", { width: 1200, height: 630, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#052f54", color: "#ffffff", fontFamily: "Serif" }, [
    h("div", { display: "flex", fontSize: 30, letterSpacing: 4, color: "#b7c5d7" }, "JOURNAL OF DISCOURSES"),
    h("div", { display: "flex", fontSize: size, fontWeight: quote ? 400 : 700, lineHeight: quote ? 1.3 : 1.15 }, t),
    h("div", { display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 34 }, [
      h("div", { display: "flex", flexDirection: "column" }, [h("div", { display: "flex" }, speaker), h("div", { display: "flex", fontSize: 28, color: "#b7c5d7", marginTop: 6 }, date || "")]),
      h("div", { display: "flex", color: "#f1ae46", fontWeight: 700 }, ref),
    ]),
  ]);
  const svg = await satori(tree, { width: 1200, height: 630, fonts: [{ name: "Serif", data: FONT_R, weight: 400 }, { name: "Serif", data: FONT_B, weight: 700 }] });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  fs.writeFileSync(cached, png);
  return png;
}
module.exports = { ogImage };
