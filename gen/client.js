// Small client for the static site: citation toggle, volume-nav scroll memory, search redirect.
(function () {
  var nav = document.querySelector("nav a[title^='Volume ']");
  var wrap = nav && nav.parentNode && nav.parentNode.parentNode;
  if (wrap) {
    try { var s = JSON.parse(localStorage.getItem("volumeWrapperScrollLeft")); if (s) wrap.scrollLeft = s; } catch (e) {}
    var cur = wrap.querySelector("a.active, a[aria-current]");
    if (cur && (cur.offsetLeft < wrap.scrollLeft || cur.offsetLeft + cur.offsetWidth > wrap.scrollLeft + wrap.clientWidth)) wrap.scrollLeft = Math.max(0, cur.offsetLeft - (wrap.clientWidth - cur.offsetWidth) / 2);
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
// (Home quote of the day: corrected by inline scripts in the page itself, before first paint; see gen/build.js.)
