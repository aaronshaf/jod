// Small client for the static site: citation toggle, volume-nav scroll memory, search redirect.
(function () {
  var nav = document.querySelector("nav a[title^='Volume ']");
  var wrap = nav && nav.parentNode && nav.parentNode.parentNode;
  if (wrap) {
    try { var s = JSON.parse(localStorage.getItem("volumeWrapperScrollLeft")); if (s) wrap.scrollLeft = s; } catch (e) {}
    wrap.addEventListener("scroll", function () { try { localStorage.setItem("volumeWrapperScrollLeft", JSON.stringify(wrap.scrollLeft)); } catch (e) {} });
  }
  var form = document.querySelector("form[action*='google.com/search']");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault(); var q = form.querySelector("input[name=q]").value;
    location.href = "/search/?q=" + encodeURIComponent(q);
  });
  var citeData = document.getElementById("jod-cite");
  var btn = document.querySelector("article nav button");
  if (citeData && btn) {
    var box = null, text = JSON.parse(citeData.textContent).text;
    var pageEl = document.querySelector("article > div");
    btn.setAttribute("title", "Cite"); btn.setAttribute("aria-label", "Copy citation");
    btn.addEventListener("click", function () {
      if (box) { box.remove(); box = null; return; }
      box = document.createElement("div"); box.className = pageEl ? pageEl.className : ""; box.style.display = "block"; box.style.padding = "16px";
      var span = document.createElement("span"); span.textContent = text; box.appendChild(span);
      pageEl.parentNode.insertBefore(box, pageEl);
      var done = function () { var n = document.createElement("span"); n.style.marginLeft = "4px"; n.textContent = "(copied)"; box.appendChild(n); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {}); 
    });
  }
  if ("serviceWorker" in navigator) navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); });
})();
// Hover/touch prefetch fallback for browsers without Speculation Rules (Firefox, Safari).
(function () {
  if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) return;
  var done = {};
  function pf(e) {
    var a = e.target.closest && e.target.closest("a[href]"); if (!a || a.origin !== location.origin) return;
    var p = a.pathname; if (done[p] || p === location.pathname || /^\/(api|mcp|_idx)(\/|$)|\.(md|json|txt)$/.test(p)) return;
    done[p] = 1; var l = document.createElement("link"); l.rel = "prefetch"; l.href = p; document.head.appendChild(l);
  }
  document.addEventListener("mouseover", pf, { passive: true });
  document.addEventListener("touchstart", pf, { passive: true });
})();
// Home: swap the static quote of the day to the visitor's date in America/Denver.
(function () {
  var box = document.getElementById("jod-qotd"); if (!box) return;
  fetch("/quotes.json").then(function (r) { return r.json(); }).then(function (qs) {
    var p = new Date().toLocaleDateString("en-CA", { timeZone: "America/Denver" }).split("-").map(Number);
    var day = Math.round((Date.UTC(p[0], p[1] - 1, p[2]) - Date.UTC(2026, 0, 1)) / 864e5);
    var q = qs[((day % qs.length) + qs.length) % qs.length];
    var set = function (k, f) { var el = box.querySelector('[data-q="' + k + '"]'); if (el) f(el); };
    set("text", function (el) { el.textContent = "\u201c" + q.text + "\u201d"; });
    set("by", function (el) { el.textContent = q.speaker + (q.date ? ", " + q.date : ""); });
    set("source", function (el) { el.href = q.source; el.textContent = q.title.length > 70 ? q.title.slice(0, 67) + "\u2026" : q.title; });
    set("ref", function (el) { el.textContent = q.ref; });
    set("perma", function (el) { el.href = q.url; });
  }).catch(function () {});
})();
