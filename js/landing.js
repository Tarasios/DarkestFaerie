/* =====================================================================
   Landing page — overall completion plus one card per tracker.
   Reads each tracker's totals via DFSummary (no tracker needs to have been
   opened) and renders a big overall progress bar, the Achievements bar,
   then the trackers grouped into Story (the four Acts) and Reference
   (Achievements, Bestiary), each a banner card with a live progress bar.
   Text comes from lang/messages/en/index.json; re-renders on lang change.
   Depends on: js/df-common.js (DF.el / DF.esc), js/df-summary.js, the
   per-tracker data modules and js/i18n.js.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", async function () {
  await i18n.init();
  var el = DF.el, esc = DF.esc;
  var translate = function (key) { return i18n.getMessage(key); };
  var format = function () { return i18n.format.apply(i18n, arguments); };

  var GAMES = {
    act1:         { page: "tools/act1.html",         banner: "act1.jpg" },
    act2:         { page: "tools/act2.html",         banner: "act2.jpg" },
    act3:         { page: "tools/act3.html",         banner: "act3.jpg" },
    act4:         { page: "tools/act4.html",         banner: "act4.jpg" },
    achievements: { page: "tools/achievements.html", banner: "achievements.jpg" },
    bestiary:     { page: "tools/bestiary.html",     banner: "bestiary.jpg" },
    shops:        { page: "tools/shops.html",         banner: "shops.jpg" }
  };
  var COLLECTIONS = [
    { id: "story",     games: ["act1", "act2", "act3", "act4"] },
    { id: "reference", games: ["achievements", "bestiary", "shops"] }
  ];

  function pct(done, total) { return total ? Math.round(100 * done / total) : 0; }
  function totalsFor(id) {
    var game = window.DF_GAMES && window.DF_GAMES[id];
    return game ? DFSummary.trackerTotals(game) : [0, 0];
  }

  function imageFigure(className, src) {
    var figure = el("figure", "banner " + className);
    var img = el("img", "banner-img"); img.alt = "";
    img.addEventListener("load", function () { figure.style.display = ""; });
    img.addEventListener("error", function () { figure.style.display = "none"; });
    img.src = src;
    figure.appendChild(img);
    return figure;
  }
  function progBar(done, total) {
    var wrap = el("div", "progbar");
    wrap.appendChild(el("span", "progbar-num", esc(done + " / " + total)));
    var track = el("span", "progbar-track" + (done >= total && total > 0 ? " full" : ""));
    var fill = el("i"); fill.style.width = pct(done, total) + "%";
    track.appendChild(fill); wrap.appendChild(track);
    wrap.appendChild(el("span", "progbar-pct", pct(done, total) + "%"));
    return wrap;
  }
  function labeledBar(label, kind, done, total) {
    var row = el("div", "prograw " + kind);
    row.appendChild(el("span", "prograw-label", esc(label)));
    row.appendChild(progBar(done, total));
    return row;
  }
  function gameCard(id) {
    var totals = totalsFor(id);
    var card = el("a", "game-card"); card.href = GAMES[id].page;
    card.appendChild(imageFigure("card-banner", "images/banners/" + GAMES[id].banner));
    var body = el("div", "game-card-body");
    body.appendChild(el("h3", null, esc(translate("game-" + id))));
    body.appendChild(progBar(totals[0], totals[1]));
    card.appendChild(body);
    return { node: card, done: totals[0], total: totals[1] };
  }

  function render() {
    var seriesDone = 0, seriesTotal = 0;
    var collectionsBox = document.getElementById("collections");
    collectionsBox.innerHTML = "";
    COLLECTIONS.forEach(function (collection) {
      var section = el("section", "collection");
      section.appendChild(el("h3", "collection-title", esc(translate("coll-" + collection.id))));
      var grid = el("div", "game-cards");
      collection.games.forEach(function (id) {
        var card = gameCard(id);
        seriesDone += card.done; seriesTotal += card.total;
        grid.appendChild(card.node);
      });
      section.appendChild(grid);
      collectionsBox.appendChild(section);
    });

    var achTotals = totalsFor("achievements");
    var totalBox = document.getElementById("series-total");
    totalBox.innerHTML = "";
    totalBox.appendChild(el("div", "series-headline", format("lg-total-count", seriesDone, seriesTotal, pct(seriesDone, seriesTotal))));
    totalBox.appendChild(labeledBar(translate("lg-ach-label"), "ach", achTotals[0], achTotals[1]));
    totalBox.appendChild(labeledBar(translate("lg-100-label"), "full", seriesDone, seriesTotal));
  }

  render();
  document.addEventListener("i18n:updated", render);
  window.addEventListener("storage", render);
});
