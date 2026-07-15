/* Byambalogy — interactions */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Theme toggle ---- */
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next === "dark" ? "#0a0b0f" : "#f6f7f9");
    });
  }

  /* ---- Scroll progress + sticky header state ---- */
  var progress = document.getElementById("progress");
  var header = document.getElementById("site-header");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var h = document.documentElement;
      var scrolled = h.scrollTop;
      var max = h.scrollHeight - h.clientHeight;
      if (progress) progress.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
      if (header) header.classList.toggle("is-scrolled", scrolled > 8);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Pointer spotlight ---- */
  var spot = document.getElementById("spotlight");
  if (spot && !reduceMotion && matchMedia("(pointer:fine)").matches) {
    window.addEventListener("pointermove", function (e) {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });
  } else if (spot) {
    spot.style.opacity = "0.35";
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.style.transitionDelay = Math.min(i * 60, 240) + "ms";
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- Home: search + tag filter ---- */
  var list = document.getElementById("post-list");
  if (list) {
    var cards = Array.prototype.slice.call(list.querySelectorAll(".card"));
    var search = document.getElementById("post-search");
    var chipBtns = Array.prototype.slice.call(document.querySelectorAll("#tag-filter .chip-btn"));
    var noResults = document.getElementById("no-results");
    var activeTag = "all";

    function apply() {
      var q = (search && search.value ? search.value : "").trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-tags") || "");
        var text = card.textContent.toLowerCase();
        var matchTag = activeTag === "all" || tags.indexOf(activeTag) !== -1;
        var matchText = !q || text.indexOf(q) !== -1;
        var show = matchTag && matchText;
        card.style.display = show ? "" : "none";
        if (show) shown++;
      });
      if (noResults) noResults.hidden = shown !== 0;
    }

    if (search) search.addEventListener("input", apply);
    chipBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        chipBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        activeTag = btn.getAttribute("data-tag");
        apply();
      });
    });
  }
})();
