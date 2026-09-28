/* =====================================================================
   main.js – small behaviours for the site. No libraries needed.
   ===================================================================== */

/* ---------- Settings ---------- */
// Theme names from css/themes.css, shown in the preview picker (?themes)
const THEMES = ["sloth", "sage", "espresso"];

// URL parameter that shows the theme picker, e.g. index.html?themes
const THEME_PICKER_PARAM = "themes";

// How much of an element must be visible before it fades in (0–1)
const REVEAL_THRESHOLD = 0.15;


/* ---------- Mobile menu ---------- */
const toggle = document.querySelector(".menu-toggle");
const links = document.getElementById("nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  // Close the menu after clicking a link
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}


/* ---------- Fade-in on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: REVEAL_THRESHOLD });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("is-visible"));
}


/* ---------- Current year in the footer ---------- */
document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});


/* ---------- Theme picker (preview only) ---------- */
// Open the site with ?themes to get a dropdown for trying the themes.
// The choice is not saved – set the real theme on <html data-theme="...">.
if (new URLSearchParams(location.search).has(THEME_PICKER_PARAM)) {
  const box = document.createElement("div");
  box.className = "theme-picker";
  box.innerHTML = "<label>Theme<select></select></label>";
  const select = box.querySelector("select");
  const current = document.documentElement.dataset.theme;
  THEMES.forEach(name => {
    const opt = new Option(name, name, false, name === current);
    select.add(opt);
  });
  select.addEventListener("change", () => {
    document.documentElement.dataset.theme = select.value;
  });
  document.body.appendChild(box);
}
