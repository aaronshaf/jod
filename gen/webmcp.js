// WebMCP (https://webmachinelearning.github.io/webmcp/): read-only tools for in-browser agents.
// Feature-detected: no effect, no UI and no network traffic unless the browser exposes document.modelContext
// (Chrome 149 preview used navigator.modelContext). Everything runs client-side on the static files (no server calls).
(function () {
  var mc = document.modelContext || navigator.modelContext;
  if (!mc || typeof mc.registerTool !== "function") return;
  var SITE = "https://jod.mrm.org", PF = "__PF_PATH__", path = location.pathname;
  var ro = { readOnlyHint: true };
  var _idx, _pf;
  function idx() { return _idx || (_idx = fetch("/data/index.json").then(function (r) { if (!r.ok) throw new Error("index unavailable"); return r.json(); }).catch(function (e) { _idx = null; throw e; })); }
  function pagefind() {
    return _pf || (_pf = import(PF + "pagefind.js").then(function (m) { if (!/^\/search\/$/.test(path)) m.options({ excerptLength: 28 }); return m; }));
  }
  function int(v, d, lo, hi) { v = parseInt(v, 10); if (isNaN(v)) v = d; return Math.max(lo, Math.min(hi, v)); }
  function plain(h) { return new DOMParser().parseFromString(String(h || ""), "text/html").body.textContent.replace(/\s+/g, " ").trim(); }
  function clip(t, n) { t = String(t || ""); if (t.length <= n) return t; var c = t.slice(0, n), i = c.lastIndexOf(" "); return (i > n * 0.6 ? c.slice(0, i) : c).replace(/[\s\u2014,;:\-]+$/, "") + "\u2026"; }
  function day(x) { return x && !/^0000/.test(x) ? x : ""; }
  function ref(d) { return "JD " + d.volume + ":" + d.start_page + "-" + d.end_page; }
  function line(d) { return ref(d) + " " + clip(d.title, 80) + " \u2014 " + d.speaker + (day(d.date) ? ", " + day(d.date) : "") + " " + d.url; }
  function find(ix, v, p) { for (var i = 0; i < ix.length; i++) if (ix[i].volume === v && p >= ix[i].start_page && p <= ix[i].end_page) return ix[i]; return null; }
  function window_(text, off, max) {
    var end = Math.min(text.length, off + max);
    return { slice: text.slice(off, end), end: end, more: end < text.length };
  }
  function discourse(v, p, off, max) {
    return idx().then(function (ix) {
      var d = find(ix, v, p);
      if (!d) return "Error: no discourse contains volume " + v + " page " + p + ". Volumes run 1-26; use list_discourses_in_volume to see page ranges.";
      return fetch("/" + d.volume + "/" + d.start_page + "/index.json").then(function (r) { return r.json(); }).then(function (j) {
        var all = (j.text || []).join("\n\n"), w = window_(all, off, max);
        if (off >= all.length) return "Error: offset " + off + " is past the end (" + all.length + " characters).";
        return d.title + "\n" + d.speaker + (day(d.date) ? ", " + day(d.date) : "") + "\n" + ref(d) + "\nCitation: " + (j.citation || "") + "\nURL: " + d.url + "\n\n" + w.slice + "\n\n" +
          "[characters " + off + "\u2013" + w.end + " of " + all.length + (w.more ? "; call again with offset=" + w.end + " for the next part" : "; end of discourse") + ". Full text: " + d.url + "index.md]";
      });
    }).catch(function (e) { return "Error: " + e.message; });
  }
  function listTitle(arr, off, lim, head) {
    var s = arr.slice(off, off + lim).map(line).join("\n");
    return head + " " + arr.length + " discourses" + (arr.length > lim ? "; showing " + (off + 1) + "\u2013" + Math.min(arr.length, off + lim) : "") + ":\n" + s + (off + lim < arr.length ? "\n[more: call again with offset=" + (off + lim) + "]" : "");
  }
  function quote() {
    return fetch("/quotes.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (all) {
      var p = new Date().toLocaleDateString("en-CA", { timeZone: "America/Denver" }).split("-").map(Number);
      var d = Math.round((Date.UTC(p[0], p[1] - 1, p[2]) - Date.UTC(2026, 0, 1)) / 864e5), q = all[((d % all.length) + all.length) % all.length];
      return "Quote of the day (America/Denver, " + p.join("-") + "):\n\u201c" + q.text + "\u201d\n\u2014 " + q.speaker + (q.date ? ", " + q.date : "") + ", \u201c" + q.title + "\u201d (" + q.ref + ")\nQuote page: " + SITE + q.url + "\nDiscourse: " + SITE + q.source;
    }).catch(function (e) { return "Error: " + e.message; });
  }
  var T = {
    search_discourses: {
      title: "Search the Journal of Discourses",
      description: "Full-text search across all 1,426 Journal of Discourses sermons (1854-1886). Returns the best matches with speaker, date, JD volume:page citation, URL and a text excerpt. Quote words for an exact phrase.",
      inputSchema: { type: "object", properties: {
        query: { type: "string", description: "Words or \"exact phrase\", e.g. plan of salvation" },
        limit: { type: "integer", minimum: 1, maximum: 10, description: "Results to return (default 4)" },
        speaker: { type: "string", description: "Optional exact speaker name, e.g. Brigham Young" },
        volume: { type: "integer", minimum: 1, maximum: 26, description: "Optional volume number" } }, required: ["query"] },
      execute: function (a) {
        a = a || {}; var q = String(a.query || "").trim(), lim = int(a.limit, 4, 1, 10);
        if (!q) return "Error: query is required.";
        var f = {}; if (a.speaker) f.speaker = String(a.speaker); if (a.volume) f.volume = String(a.volume);
        return pagefind().then(function (pf) { return pf.search(q, { filters: f }); }).then(function (res) {
          var rs = res.results; if (!rs.length) return "No discourses match: " + q + ". Try fewer or different words.";
          return Promise.all(rs.slice(0, lim).map(function (r) { return r.data(); })).then(function (ds) {
            return rs.length + " discourse" + (rs.length === 1 ? "" : "s") + " match (" + q + ")" + (rs.length > lim ? "; top " + lim : "") + ":\n" + ds.map(function (d, i) {
              var m = d.meta || {}; return (i + 1) + ". " + clip(m.title || d.url, 80) + " \u2014 " + (m.speaker || "") + (day(m.date) ? ", " + day(m.date) : "") + " (" + (m.ref || "") + ") " + SITE + d.url + "\n   " + clip(plain(d.excerpt), 170);
            }).join("\n");
          });
        }).catch(function (e) { return "Error: " + e.message; });
      } },
    get_discourse: {
      title: "Get a discourse",
      description: "Text of one discourse with title, speaker, date, citation and URL. Give a volume and any page inside the discourse. Long sermons are returned in parts: pass offset from the previous result to continue.",
      inputSchema: { type: "object", properties: {
        volume: { type: "integer", minimum: 1, maximum: 26, description: "Volume number" },
        page: { type: "integer", minimum: 1, description: "Any page within the discourse" },
        offset: { type: "integer", minimum: 0, description: "Character offset to continue from (default 0)" },
        max_chars: { type: "integer", minimum: 200, maximum: 6000, description: "Characters to return (default 1500)" } }, required: ["volume", "page"] },
      execute: function (a) { a = a || {}; return discourse(int(a.volume, 0, 0, 99), int(a.page, 0, 0, 99999), int(a.offset, 0, 0, 1e7), int(a.max_chars, 1500, 200, 6000)); } },
    list_volumes: {
      title: "List volumes",
      description: "The 26 volumes of the Journal of Discourses with years, page range and number of discourses. Volume pages are at https://jod.mrm.org/<volume>/.",
      inputSchema: { type: "object", properties: {} },
      execute: function () {
        return idx().then(function (ix) {
          var m = {}; ix.forEach(function (d) { var x = m[d.volume] || (m[d.volume] = { n: 0, a: 1e9, b: 0, y0: 9999, y1: 0 }); x.n++; x.a = Math.min(x.a, d.start_page); x.b = Math.max(x.b, d.end_page); var y = +String(d.date || "").slice(0, 4); if (y) { x.y0 = Math.min(x.y0, y); x.y1 = Math.max(x.y1, y); } });
          return Object.keys(m).sort(function (a, b) { return a - b; }).map(function (v) { var x = m[v]; return "Volume " + v + ": " + (x.y0 === x.y1 ? x.y0 : x.y0 + "\u2013" + x.y1) + ", pp. " + x.a + "\u2013" + x.b + ", " + x.n + " discourses"; }).join("\n") + "\nVolume page: " + SITE + "/<volume>/";
        }).catch(function (e) { return "Error: " + e.message; });
      } },
    list_discourses_in_volume: {
      title: "List discourses in a volume",
      description: "Discourses of one volume in page order: citation, title, speaker, date and URL. Use get_discourse with a volume and page to read one.",
      inputSchema: { type: "object", properties: {
        volume: { type: "integer", minimum: 1, maximum: 26, description: "Volume number" },
        offset: { type: "integer", minimum: 0, description: "Skip this many discourses (default 0)" },
        limit: { type: "integer", minimum: 1, maximum: 40, description: "Discourses to return (default 10)" } }, required: ["volume"] },
      execute: function (a) {
        a = a || {}; var v = int(a.volume, 0, 0, 99), off = int(a.offset, 0, 0, 1e5), lim = int(a.limit, 10, 1, 40);
        return idx().then(function (ix) {
          var arr = ix.filter(function (d) { return d.volume === v; }).sort(function (x, y) { return x.start_page - y.start_page; });
          return arr.length ? listTitle(arr, off, lim, "Volume " + v + " has") : "Error: volume must be 1-26.";
        }).catch(function (e) { return "Error: " + e.message; });
      } },
    get_speaker_discourses: {
      title: "List a speaker's discourses",
      description: "Discourses by one speaker (name or part of a name, e.g. Brigham Young, Kimball): citation, title, date and URL, oldest first. If the name matches several speakers, their names and counts are listed instead.",
      inputSchema: { type: "object", properties: {
        speaker: { type: "string", description: "Speaker name or part of it" },
        offset: { type: "integer", minimum: 0, description: "Skip this many discourses (default 0)" },
        limit: { type: "integer", minimum: 1, maximum: 40, description: "Discourses to return (default 10)" } }, required: ["speaker"] },
      execute: function (a) {
        a = a || {}; var s = String(a.speaker || "").trim().toLowerCase(), off = int(a.offset, 0, 0, 1e5), lim = int(a.limit, 10, 1, 40);
        if (!s) return "Error: speaker is required.";
        return idx().then(function (ix) {
          var hit = ix.filter(function (d) { return d.speaker.toLowerCase().indexOf(s) >= 0; }), names = {};
          hit.forEach(function (d) { names[d.speaker] = (names[d.speaker] || 0) + 1; });
          var ks = Object.keys(names), exact = ks.filter(function (k) { return k.toLowerCase() === s; });
          if (exact.length === 1) { ks = exact; hit = hit.filter(function (d) { return d.speaker === exact[0]; }); }
          if (!ks.length) return "No speaker matches \u201c" + a.speaker + "\u201d.";
          if (ks.length > 1) return "Several speakers match; repeat with one of these names:\n" + ks.sort(function (x, y) { return names[y] - names[x]; }).slice(0, 25).map(function (k) { return k + " (" + names[k] + ")"; }).join("\n");
          hit.sort(function (x, y) { return (x.date || "").localeCompare(y.date || "") || x.volume - y.volume || x.start_page - y.start_page; });
          return listTitle(hit, off, lim, ks[0] + " gave");
        }).catch(function (e) { return "Error: " + e.message; });
      } },
    get_daily_quote: {
      title: "Quote of the day",
      description: "Today's quote from the Journal of Discourses as shown on the home page (day changes at midnight America/Denver), with speaker, JD citation and URLs.",
      inputSchema: { type: "object", properties: {} },
      execute: quote }
  };
  var m = /^\/(\d+)\/(\d+)\/$/.exec(path);
  if (m) T.get_current_discourse = {
    title: "Read the open discourse",
    description: "Text of the discourse open in this tab, with title, speaker, date, citation and URL. Long sermons are returned in parts: pass offset from the previous result to continue.",
    inputSchema: { type: "object", properties: {
      offset: { type: "integer", minimum: 0, description: "Character offset to continue from (default 0)" },
      max_chars: { type: "integer", minimum: 200, maximum: 6000, description: "Characters to return (default 1500)" } } },
    execute: function (a) { a = a || {}; return discourse(+m[1], +m[2], int(a.offset, 0, 0, 1e7), int(a.max_chars, 1500, 200, 6000)); } };
  function add(name) {
    var t = T[name], def = { name: name, title: t.title, description: t.description, inputSchema: t.inputSchema, annotations: ro, execute: t.execute };
    try { var p = mc.registerTool(def); if (p && p.catch) p.catch(function () {}); } catch (e) {}
  }
  Object.keys(T).forEach(function (n) {
    if (n !== "search_discourses") return add(n);
    // On /search/ the search form is itself the declarative tool of the same name; register this one only if that did not take.
    if (path !== "/search/" || typeof mc.getTools !== "function") return add(n);
    mc.getTools().then(function (ts) { if (!ts.some(function (t) { return t.name === n; })) add(n); }, function () { add(n); });
  });
})();
