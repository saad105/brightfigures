/* Bright Figures LLC — site scripts */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Icon sprite (inlined so icons work from any host or file://) ---------- */
  var ICONS = {
    "book": '<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>',
    "sparkles": '<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/>',
    "receipt": '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    "users": '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8"/><path d="M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
    "building": '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 21v-4h6v4"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2"/>',
    "landmark": '<path d="M3 21h18"/><path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10"/><path d="M12 3l9 5H3z"/>',
    "user": '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    "file-chart": '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 17v-3M12 17v-6M16 17v-2"/>',
    "trend": '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    "dashboard": '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    "compass": '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    "check": '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "target": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    "shield": '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    "eye": '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    "bulb": '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    "briefcase": '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    "sliders": '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    "phone": '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "chevron-down": '<path d="M6 9l6 6 6-6"/>',
    "menu": '<path d="M4 7h16M4 12h16M4 17h16"/>',
    "x": '<path d="M6 6l12 12M18 6L6 18"/>',
    "rocket": '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3c1-4 4.5-8.5 12-9-.5 7.5-5 11-9 12z"/><circle cx="14.5" cy="9.5" r="1.5"/>',
    "store": '<path d="M4 10v10h16V10"/><path d="M3 4h18l-1.5 6h-15z"/><path d="M10 20v-5h4v5"/>',
    "cart": '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11.5l2-8H6.2"/>',
    "utensils": '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10"/><path d="M17 21V3c-2 1.5-3 4-3 7v4h3"/>',
    "home": '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    "id-card": '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16a3 3 0 0 1 6 0M14 10h4M14 14h3"/>',
    "layers": '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    "pie": '<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
    "circles": '<circle cx="8.5" cy="12" r="5.5"/><circle cx="15.5" cy="12" r="5.5"/>',
    "laptop": '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    "calendar": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    "search": '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    "repeat": '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    "lock": '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    "cog": '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
  Object.keys(ICONS).forEach(function (k) { sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + "</symbol>"; });
  sprite += "</svg>";
  document.body.insertAdjacentHTML("afterbegin", sprite);

  /* ---------- Header: scrolled state ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var root = document.documentElement;
  function closeNav() {
    root.classList.remove("nav-open");
    if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); }
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = root.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  document.querySelectorAll(".primary-nav a").forEach(function (a) { a.addEventListener("click", closeNav); });
  window.addEventListener("resize", function () { if (window.innerWidth > 980) closeNav(); });

  /* ---------- Services mega menu ---------- */
  document.querySelectorAll(".has-mega").forEach(function (item) {
    var btn = item.querySelector(".sub-toggle");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", function (e) {
      if (!item.contains(e.target) && window.innerWidth > 980) { item.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeNav();
    document.querySelectorAll(".has-mega.open").forEach(function (item) {
      item.classList.remove("open");
      var btn = item.querySelector(".sub-toggle");
      if (btn) { btn.setAttribute("aria-expanded", "false"); btn.focus(); }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (!form) return;

  // Preselect a service from ?service=… links across the site
  var params = new URLSearchParams(window.location.search);
  var wanted = params.get("service");
  var select = form.querySelector("#service");
  if (wanted && select) {
    Array.prototype.forEach.call(select.options, function (o) { if (o.value.toLowerCase() === wanted.toLowerCase()) select.value = o.value; });
  }

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function validateField(field) {
    var input = field.querySelector("input, select, textarea");
    if (!input) return true;
    var v = input.value.trim();
    var ok = true;
    if (input.required && !v) ok = false;
    else if (input.type === "email" && v && !emailRe.test(v)) ok = false;
    else if (input.type === "tel" && v && v.replace(/\D/g, "").length < 7) ok = false;
    field.classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    return ok;
  }
  form.querySelectorAll(".field").forEach(function (field) {
    var input = field.querySelector("input, select, textarea");
    if (!input) return;
    input.addEventListener("blur", function () { if (input.value.trim()) validateField(field); });
    input.addEventListener("input", function () { if (field.classList.contains("invalid")) validateField(field); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fields = form.querySelectorAll(".field");
    var firstBad = null;
    fields.forEach(function (f) { if (!validateField(f) && !firstBad) firstBad = f; });
    if (firstBad) { firstBad.querySelector("input, select, textarea").focus(); return; }

    var card = form.closest(".form-card");
    var submitBtn = form.querySelector("button[type=submit]");
    var endpoint = form.getAttribute("data-endpoint");
    var data = new FormData(form);
    if (data.get("company_website")) return; // honeypot

    function done() { card.classList.add("sent"); card.scrollIntoView({ behavior: "smooth", block: "center" }); }

    if (endpoint) {
      submitBtn.disabled = true;
      submitBtn.firstChild.textContent = "Sending… ";
      fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); done(); })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.firstChild.textContent = "Submit Request ";
          alert("Sorry, your request could not be sent. Please email us directly at " + form.getAttribute("data-email") + ".");
        });
    } else {
      // No form endpoint configured yet: hand off to the visitor's email client.
      var body = [
        "Name: " + data.get("name"),
        "Business: " + (data.get("business") || "-"),
        "Email: " + data.get("email"),
        "Phone: " + (data.get("phone") || "-"),
        "Service needed: " + data.get("service"),
        "",
        data.get("message")
      ].join("\n");
      window.location.href = "mailto:" + form.getAttribute("data-email") +
        "?subject=" + encodeURIComponent("Consultation request: " + data.get("service")) +
        "&body=" + encodeURIComponent(body);
      done();
    }
  });
})();
