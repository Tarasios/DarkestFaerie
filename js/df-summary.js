/* =====================================================================
   DOM-free completion totals, shared by the landing page. Computes
   [done, total] for any tracker straight from its data module +
   localStorage, without rendering — so the landing page can show progress
   for every Act / page whether or not its tracker was opened.

   This MIRRORS the generic engine (js/df-tracker.js) overallCount():
   variants, multi-checks and the cross-section autoChecks auto-completion.
   "Achievements" progress (the trophies/achievements sections only) is the
   landing page's second bar.

   Trackers register on window.DF_GAMES (see the *-data.js modules).
   Needs js/df-common.js (DF.*).
   ===================================================================== */
var DFSummary = (function () {
  function getStore(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : {}; }
    catch (e) { return {}; }
  }
  function findSec(game, sectionId) {
    for (var t = 0; t < game.tabs.length; t++) {
      var sections = game.tabs[t].sections;
      for (var s = 0; s < sections.length; s++) if (sections[s].id === sectionId) return sections[s];
    }
    return null;
  }
  function checkKey(index, checkId, checkIndex) { return checkIndex === 0 ? String(index) : index + "::" + checkId; }
  function isChecked(store, index, section, checkIndex) {
    var checks = section && section.checks;
    return checks ? !!store[checkKey(index, checks[checkIndex].k, checkIndex)] : !!store[index];
  }
  function autoDone(game, allStores, section, item) {
    if (!game.autoChecks) return false;
    for (var r = 0; r < game.autoChecks.length; r++) {
      var rule = game.autoChecks[r];
      if (rule.to !== section.id) continue;
      var sourceSec = findSec(game, rule.from), sourceStore = allStores[rule.from] || {};
      if (!sourceSec) continue;
      for (var mission in rule.map) {
        if (rule.map[mission] !== item[rule.toKey || "name"]) continue;
        var sourceItems = sourceSec.items || [], checkIndex = 0;
        if (rule.check) {
          checkIndex = -1;
          for (var ci = 0; ci < sourceSec.checks.length; ci++) if (sourceSec.checks[ci].k === rule.check) { checkIndex = ci; break; }
        }
        if (checkIndex < 0) continue;
        for (var i = 0; i < sourceItems.length; i++) if (sourceItems[i].name === mission && isChecked(sourceStore, i, sourceSec, checkIndex)) return true;
      }
    }
    return false;
  }
  function entryCount(game, allStores, section, storeId, items) {
    var store = allStores[storeId] || {}, checks = section && section.checks, done = 0, total = 0;
    (items || []).forEach(function (item, index) {
      if (checks) checks.forEach(function (check, checkIndex) { total++; if (store[checkKey(index, check.k, checkIndex)]) done++; });
      else { total++; if (store[index] || autoDone(game, allStores, section, item)) done++; }
    });
    return [done, total];
  }
  function trackerTotals(game) {
    var allStores = getStore(game.storeKey), chars = game.chars || [], done = 0, total = 0;
    game.tabs.forEach(function (tab) {
      tab.sections.forEach(function (section) {
        if (section.variants) {
          chars.forEach(function (char) {
            var c = entryCount(game, allStores, section, section.id + "-" + char.id, section.variants[char.id] || []);
            done += c[0]; total += c[1];
          });
        } else {
          var c = entryCount(game, allStores, section, section.id, section.items);
          done += c[0]; total += c[1];
        }
      });
    });
    return [done, total];
  }
  /* Achievement progress only — sections flagged `trophies` (the RA list). */
  function trackerAchievements(game) {
    var allStores = getStore(game.storeKey), done = 0, total = 0;
    game.tabs.forEach(function (tab) {
      tab.sections.forEach(function (section) {
        if (!section.trophies) return;
        var c = entryCount(game, allStores, section, section.id, section.items);
        done += c[0]; total += c[1];
      });
    });
    return [done, total];
  }
  return { trackerTotals: trackerTotals, trackerAchievements: trackerAchievements, getStore: getStore };
})();
