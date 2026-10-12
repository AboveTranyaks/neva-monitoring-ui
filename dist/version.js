(function () {
  var versions = window.__APP_VERSIONS__ || {};
  document.querySelectorAll("[data-version-scope]").forEach(function (target) {
    var scope = target.dataset.versionScope;
    var current = versions[scope] || {};
    var label = scope === "admin" ? "Admin" : "Operator";
    target.textContent = label + " " + (current.version || "v.---");
  });
})();
