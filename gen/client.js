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
  if (location.pathname === "/search/" && window.PagefindUI) {
    var main = document.querySelector("main"); var div = document.createElement("div"); div.id = "search";
    div.style.maxWidth = "960px"; div.style.margin = "16px auto"; div.style.padding = "0 16px";
    main.innerHTML = ""; main.appendChild(div);
    var ui = new PagefindUI({ element: "#search", showSubResults: true, showImages: false });
    var q = new URLSearchParams(location.search).get("q"); if (q) ui.triggerSearch(q);
  }
  if ("serviceWorker" in navigator) navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); });
})();
