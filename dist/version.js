(function () {
  var versions = window.__APP_VERSIONS__ || {};
  var firmware = versions.firmware || {};
  var build = versions.build || {};
  var target = document.getElementById("appVersion");
  if (!target) return;
  target.textContent = "FV: " + (firmware.version || "—") + " (" + (firmware.commit || "—") + ")  BV: " + (build.version || "—") + " (" + (build.commit || "—") + ")";
})();
