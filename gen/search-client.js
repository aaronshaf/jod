// Site-styled search on top of the Pagefind JS API.
(function () {
  if (location.pathname !== "/search/") return;
  var root = document.getElementById("jod-search"); if (!root) return;
  var q = root.querySelector("input[type=search]"), sp = root.querySelector("#js-speaker"), vol = root.querySelector("#js-volume");
  var meta = root.querySelector(".js-meta"), list = root.querySelector(".js-list"), more = root.querySelector(".js-more"), empty = root.querySelector(".js-empty");
  var pf, results = [], shown = 0, seq = 0, PAGE = 15;
  var params = new URLSearchParams(location.search);
  q.value = params.get("q") || "";
  var hq = document.querySelector("form[action*='google.com/search'] input[name=q]"); if (hq) hq.value = q.value;
  function opt(sel, values, cur) { if (sel.options.length > 1) { if (cur) sel.value = cur; return; } values.forEach(function (v) { var o = document.createElement("option"); o.value = v; o.textContent = v; if (v === cur) o.selected = true; sel.appendChild(o); }); }
  function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function syncUrl() {
    var p = new URLSearchParams(); if (q.value.trim()) p.set("q", q.value.trim()); if (sp.value) p.set("speaker", sp.value); if (vol.value) p.set("volume", vol.value);
    history.replaceState(null, "", "/search/" + (p.toString() ? "?" + p : ""));
    document.title = (q.value.trim() ? q.value.trim() + " · " : "") + "Search · Journal of Discourses";
  }
  function render(batch) {
    batch.forEach(function (d) {
      var m = d.meta || {}, li = document.createElement("li"); li.className = "js-r";
      li.innerHTML = '<a href="' + esc(d.url) + '">' + esc(m.title || d.url) + '</a><div class="js-sub"><span>' + esc(m.speaker) + "</span>" + (m.date ? "<span>" + esc(m.date) + "</span>" : "") + '<span class="js-ref">' + esc(m.ref) + '</span></div><div class="js-ex">' + (d.excerpt || "") + "</div>";
      list.appendChild(li);
    });
  }
  function loadMore() {
    var my = seq, slice = results.slice(shown, shown + PAGE); shown += slice.length;
    Promise.all(slice.map(function (r) { return r.data(); })).then(function (ds) { if (my === seq) { render(ds); more.hidden = shown >= results.length; } });
  }
  function run() {
    syncUrl(); var my = ++seq, term = q.value.trim();
    list.innerHTML = ""; more.hidden = true; shown = 0;
    if (!term && !sp.value && !vol.value) { meta.textContent = ""; empty.hidden = false; list.hidden = true; return Promise.resolve("Error: enter search words."); }
    empty.hidden = true; meta.textContent = "Searching…";
    var filters = {}; if (sp.value) filters.speaker = sp.value; if (vol.value) filters.volume = vol.value;
    return pf.debouncedSearch(term || null, { filters: filters, sort: term ? undefined : { order: "asc" } }, 200).then(function (res) {
      if (!res || my !== seq) return "Search superseded by a newer one.";
      results = res.results; list.hidden = !results.length;
      meta.textContent = results.length ? results.length.toLocaleString() + (results.length === 1 ? " discourse" : " discourses") + (term ? " matching \u201c" + term + "\u201d" : "") : "No discourses found. Try fewer or different words.";
      loadMore();
      return summary(res.results, term);
    });
  }
  function clip(t, n) { if (t.length <= n) return t; var c = t.slice(0, n), i = c.lastIndexOf(" "); return (i > n * 0.6 ? c.slice(0, i) : c).replace(/[\s\u2014,;:\-]+$/, "") + "\u2026"; }
  function summary(rs, term) {
    if (!rs.length) return "No discourses match. Try fewer or different words.";
    return Promise.all(rs.slice(0, 4).map(function (r) { return r.data(); })).then(function (ds) {
      return rs.length + " discourse" + (rs.length === 1 ? "" : "s") + (term ? " match (" + term + ")" : "") + (rs.length > 4 ? "; top 4" : "") + " (all results are listed on this page):\n" + ds.map(function (d, i) {
        var m = d.meta || {}, x = document.createElement("div"); x.innerHTML = d.excerpt || "";
        return (i + 1) + ". " + clip(m.title || d.url, 80) + " \u2014 " + (m.speaker || "") + (m.date && !/^0000/.test(m.date) ? ", " + m.date : "") + " (" + (m.ref || "") + ") https://jod.mrm.org" + d.url + "\n   " + clip(x.textContent.replace(/\s+/g, " ").trim(), 170);
      }).join("\n");
    });
  }
  var ready = import((window.JOD_PF || "/pagefind/") + "pagefind.js").then(function (m) {
    pf = m; pf.options({ excerptLength: 36 });
    return pf.filters();
  }).then(function (f) {
    var speakers = Object.keys(f.speaker || {}).sort(function (a, b) { return f.speaker[b] - f.speaker[a]; });
    var vols = Object.keys(f.volume || {}).sort(function (a, b) { return a - b; });
    opt(sp, speakers, params.get("speaker")); opt(vol, vols, params.get("volume"));
    q.addEventListener("input", run); sp.addEventListener("change", run); vol.addEventListener("change", run);
    more.addEventListener("click", loadMore);
    run();
  });
  var form = root.querySelector("form");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var p = ready.then(function () { return run(); });
    if (e.agentInvoked && e.respondWith) e.respondWith(p);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); } });
  q.focus();
})();
