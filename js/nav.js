/* =====================================================================
   Header "Acts" dropdown — open on hover with intent, or on click (touch).
   A short close delay lets the pointer cross the gap from the button to the
   menu before it closes. Keyboard users get :focus-within (CSS) + Escape.
   Also registers the caching service worker (see /sw.js), resolved relative
   to the site root via data-root so it works under a subpath (GitHub Pages).
   ===================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("games-menu-btn");
  if (btn) {
    var menu = btn.closest(".has-menu");
    if (menu) {
      var DELAY = 320;
      var timer;
      function closeAll() { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
      menu.addEventListener("mouseenter", function () { clearTimeout(timer); menu.classList.add("open"); btn.setAttribute("aria-expanded", "true"); });
      menu.addEventListener("mouseleave", function () { timer = setTimeout(closeAll, DELAY); });
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (menu.classList.contains("open")) closeAll();
        else { menu.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      });
      document.addEventListener("click", function (e) { if (!menu.contains(e.target)) closeAll(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
    }
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    var root = (document.body && document.body.getAttribute("data-root")) || "./";
    navigator.serviceWorker.register(root + "sw.js").catch(function () { /* caching is optional */ });
  });
}
