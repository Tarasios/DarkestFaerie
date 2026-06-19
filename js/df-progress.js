/* =====================================================================
   Shared progress import/export for the Darkest Faerie tracker.
   Included on every tracker page after its main script; injects an
   Export / Import bar under the page header. Exports every localStorage
   key belonging to the tracker (all Acts + Achievements at once) so a
   backup made on one page restores the whole site.
   Labels come from the page's lang JSON (kp-* keys).
   ===================================================================== */
(function () {
  var KEY_RE = /^df_/;                 // every tracker storage key starts with df_
  var FORMAT = "df-tools-progress";

  function collect() {
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (KEY_RE.test(key)) data[key] = localStorage.getItem(key);
    }
    return data;
  }
  function doExport() {
    var payload = { format: FORMAT, version: 1, exported: new Date().toISOString(), data: collect() };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "darkest-faerie-progress-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function doImport(file, translate) {
    file.text().then(function (text) {
      var parsed = JSON.parse(text);
      var data = (parsed && parsed.format === FORMAT && parsed.data) ? parsed.data
        : (parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null);
      if (!data) throw new Error("bad format");
      var entries = Object.keys(data).filter(function (k) { return KEY_RE.test(k) && typeof data[k] === "string"; });
      if (!entries.length) throw new Error("no keys");
      if (!confirm(translate("kp-import-confirm"))) return;
      entries.forEach(function (k) { try { localStorage.setItem(k, data[k]); } catch (e) { /* quota/private */ } });
      location.reload();
    }).catch(function () { alert(translate("kp-import-error")); });
  }
  function build() {
    var header = document.querySelector(".df .df-header");
    if (!header || document.getElementById("kp-bar")) return;
    var translate = function (key) { return (typeof i18n !== "undefined" ? i18n.getMessage(key) : key); };

    var bar = document.createElement("div"); bar.className = "kp-bar"; bar.id = "kp-bar";
    var exportBtn = document.createElement("button"); exportBtn.className = "clearbtn"; exportBtn.id = "kp-export-btn"; exportBtn.onclick = doExport;
    var importBtn = document.createElement("button"); importBtn.className = "clearbtn"; importBtn.id = "kp-import-btn";
    var fileInput = document.createElement("input"); fileInput.type = "file"; fileInput.accept = "application/json,.json"; fileInput.style.display = "none";
    fileInput.addEventListener("change", function () { if (fileInput.files[0]) doImport(fileInput.files[0], translate); fileInput.value = ""; });
    importBtn.onclick = function () { fileInput.click(); };
    var note = document.createElement("span"); note.className = "kp-note"; note.id = "kp-note";

    function label() { exportBtn.textContent = translate("kp-export"); importBtn.textContent = translate("kp-import"); note.textContent = translate("kp-note"); }
    label();
    document.addEventListener("i18n:updated", label);
    bar.appendChild(exportBtn); bar.appendChild(importBtn); bar.appendChild(note); bar.appendChild(fileInput);
    header.appendChild(bar);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
