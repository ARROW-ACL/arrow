/* Renders ARROW content from data.js into any page that has the matching hooks. */
(function () {
  "use strict";
  var D = window.ARROW;
  if (!D) return;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* ---- Simple text hooks ---- */
  $all("[data-site-count]").forEach(function (el) { el.textContent = D.sites.length; });
  $all("[data-participants]").forEach(function (el) { el.textContent = D.site.participants; });
  $all("[data-email]").forEach(function (el) {
    el.href = "mailto:" + D.site.contactEmail + (el.dataset.email ? "?subject=" + encodeURIComponent(el.dataset.email) : "");
    if (!el.textContent.trim()) el.textContent = D.site.contactEmail;
  });
  $all("[data-dart]").forEach(function (el) { el.href = D.site.dartUrl; });
  $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- Sites ---- */
  var sitesEl = $("#sites");
  if (sitesEl) {
    sitesEl.innerHTML = D.sites.slice().sort(function (a, b) { return a.name.localeCompare(b.name); })
      .map(function (s) {
        return "<li><span class=\"site-name\">" + esc(s.name) + "</span>" +
          (s.city ? "<span class=\"site-city\">" + esc(s.city) + "</span>" : "") + "</li>";
      }).join("");
  }

  /* ---- Sites map ---- */
  var mapEl = $("#sites-map");
  if (mapEl && window.US_MAP) {
    var M = window.US_MAP;
    // Albers equal-area conic, matching the projection used to draw the states.
    var rad = Math.PI / 180, s0 = Math.sin(29.5 * rad), n = (s0 + Math.sin(45.5 * rad)) / 2,
        cst = 1 + s0 * (2 * n - s0), r0 = Math.sqrt(cst) / n;
    function raw(l, p) { var r = Math.sqrt(cst - 2 * n * Math.sin(p)) / n; return [r * Math.sin(l * n), r0 - r * Math.cos(l * n)]; }
    var ctr = raw(-0.6 * rad, 38.7 * rad);
    function project(lon, lat) {
      var q = raw((lon + 96) * rad, lat * rad);
      return [M.translate[0] + M.scale * (q[0] - ctr[0]), M.translate[1] - M.scale * (q[1] - ctr[1])];
    }

    // Sites in the same city share one marker.
    var cities = {}, order = [];
    D.sites.forEach(function (s) {
      if (typeof s.lat !== "number" || typeof s.lon !== "number") return;
      var key = s.city || s.name;
      if (!cities[key]) { cities[key] = { city: key, lat: s.lat, lon: s.lon, names: [] }; order.push(key); }
      cities[key].names.push(s.name);
    });

    var dots = order.map(function (k, i) {
      var c = cities[k], xy = project(c.lon, c.lat), r = c.names.length > 1 ? 14 : 10;
      var label = c.city + ": " + c.names.join(", ");
      return '<g class="site-dot" tabindex="0" role="button" data-i="' + i + '" aria-label="' + esc(label) + '">' +
        '<circle class="halo" cx="' + xy[0].toFixed(1) + '" cy="' + xy[1].toFixed(1) + '" r="' + (r + 7) + '"/>' +
        '<circle class="pin" cx="' + xy[0].toFixed(1) + '" cy="' + xy[1].toFixed(1) + '" r="' + r + '"/>' +
        (c.names.length > 1 ? '<text x="' + xy[0].toFixed(1) + '" y="' + (xy[1] + 5).toFixed(1) + '">' + c.names.length + "</text>" : "") +
        "</g>";
    }).join("");

    mapEl.innerHTML =
      '<svg viewBox="0 0 ' + M.W + " " + M.H + '" role="group" aria-label="Map of ARROW member sites">' +
        '<path class="states" d="' + M.d + '"/>' + dots + "</svg>" +
      '<div class="map-tip" role="status" aria-live="polite"></div>';

    var tip = mapEl.querySelector(".map-tip"), active = null;
    function show(g) {
      var c = cities[order[+g.dataset.i]];
      tip.innerHTML = "<strong>" + esc(c.city) + "</strong>" + c.names.map(function (nm) { return "<span>" + esc(nm) + "</span>"; }).join("");
      var box = mapEl.getBoundingClientRect(), pb = g.querySelector(".pin").getBoundingClientRect();
      var x = pb.left + pb.width / 2 - box.left, y = pb.top - box.top;
      tip.style.left = Math.min(Math.max(x, 110), box.width - 110) + "px";
      tip.style.top = y + "px";
      tip.classList.add("on");
      if (active && active !== g) active.classList.remove("is-active");
      g.classList.add("is-active"); active = g;
    }
    function hide() { tip.classList.remove("on"); if (active) active.classList.remove("is-active"); active = null; }
    $all("#sites-map .site-dot").forEach(function (g) {
      g.addEventListener("mouseenter", function () { show(g); });
      g.addEventListener("mouseleave", hide);
      g.addEventListener("focus", function () { show(g); });
      g.addEventListener("blur", hide);
      g.addEventListener("click", function (e) { e.stopPropagation(); active === g ? hide() : show(g); });
      g.addEventListener("keydown", function (e) { if (e.key === "Escape") { hide(); g.blur(); } });
    });
    document.addEventListener("click", hide);
  }

  /* ---- Publications ---- */
  function authorsHtml(a) {
    // Set the group author apart so ARROW's contribution reads clearly.
    return esc(a).replace(/\bARROW\b/, '<span class="group">ARROW</span>');
  }
  function linksHtml(l) {
    if (!l) return "";
    var out = [];
    if (l.doi) out.push('<a href="https://doi.org/' + esc(l.doi) + '">Article</a>');
    if (l.pubmed) out.push('<a href="https://pubmed.ncbi.nlm.nih.gov/' + esc(l.pubmed) + '/">PubMed</a>');
    if (l.pdf) out.push('<a href="' + esc(l.pdf) + '">PDF</a>');
    if (l.url) out.push('<a href="' + esc(l.url) + '">Link</a>');
    return out.length ? '<div class="links">' + out.join("") + "</div>" : "";
  }
  function pubHtml(p, showYear) {
    var venue = p.journal || p.meeting || "";
    return '<li class="pub"' + (showYear ? "" : ' style="grid-template-columns:1fr"') + ">" +
      (showYear ? '<div class="year">' + esc(p.year) + "</div>" : "") +
      "<div>" +
        '<p class="title">' + esc(p.title) + "</p>" +
        '<p class="authors">' + authorsHtml(p.authors) + "</p>" +
        '<p class="venue"><em>' + esc(venue) + "</em>" + (p.details ? ". " + esc(p.details) : "") + "</p>" +
        linksHtml(p.links) +
      "</div></li>";
  }
  function byYear(a, b) { return (b.year || 0) - (a.year || 0); }

  var recent = $("#recent-pubs");
  if (recent) {
    var n = parseInt(recent.dataset.limit || "3", 10);
    recent.innerHTML = D.publications.slice().sort(byYear).slice(0, n)
      .map(function (p) { return pubHtml(p, true); }).join("");
  }

  function renderList(el, items, emptyText) {
    if (!el) return;
    if (!items.length) {
      el.outerHTML = '<p class="empty">' + esc(emptyText) + "</p>";
      return;
    }
    el.innerHTML = items.slice().sort(byYear).map(function (p) { return pubHtml(p, true); }).join("");
  }
  renderList($("#all-pubs"), D.publications, "Publications will be listed here.");
  renderList($("#all-abstracts"), D.abstracts,
    "Conference abstracts and posters will be listed here as they're presented.");

  /* ---- People ---- */
  function initials(name) {
    return name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
  }
  function personHtml(p, showInst) {
    var img = p.photo
      ? '<img class="avatar" src="assets/people/' + esc(p.photo) + '" alt="" loading="lazy" data-initials="' + esc(initials(p.name)) + '">'
      : '<div class="avatar avatar--initials" aria-hidden="true">' + esc(initials(p.name)) + "</div>";
    return '<li class="person">' + img +
      '<p class="name">' + esc(p.name) + (p.credentials ? ', <span class="cred">' + esc(p.credentials) + "</span>" : "") + "</p>" +
      (p.role ? '<p class="role">' + esc(p.role) + "</p>" : "") +
      (p.title ? '<p class="title">' + esc(p.title) + "</p>" : "") +
      (showInst && p.institution ? '<p class="inst">' + esc(p.institution) + "</p>" : "") +
      "</li>";
  }

  var leaders = $("#leadership");
  if (leaders) leaders.innerHTML = D.leadership.map(function (p) { return personHtml(p, true); }).join("");

  var wg = $("#workgroup");
  if (wg) {
    var groups = {};
    D.workgroup.forEach(function (p) { (groups[p.institution] = groups[p.institution] || []).push(p); });
    wg.innerHTML = Object.keys(groups).sort().map(function (inst) {
      return '<div class="inst-group"><h3>' + esc(inst) + '</h3><ul class="people">' +
        groups[inst].map(function (p) { return personHtml(p, false); }).join("") + "</ul></div>";
    }).join("");
  }

  // Missing photo? Show initials instead of a broken image.
  $all("img.avatar").forEach(function (img) {
    function swap() {
      var d = document.createElement("div");
      d.className = "avatar avatar--initials";
      d.setAttribute("aria-hidden", "true");
      d.textContent = img.dataset.initials || "";
      img.replaceWith(d);
    }
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap);
  });
})();
