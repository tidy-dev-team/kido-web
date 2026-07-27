function observeSvg(id) {
  const el = document.getElementById(id);
  if (!el) return;
  new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio >= 1.0) {
        el.classList.add("is-animated");
      } else if (!entry.isIntersecting) {
        el.classList.remove("is-animated");
      }
    },
    { threshold: [0, 1.0] },
  ).observe(el);
}

window.addEventListener(
  "scroll",
  () => {
    servicesDropdown?.classList.remove("open");
    servicesBtn?.classList.remove("open");
  },
  { passive: true },
);

const servicesBtn = document.getElementById("servicesBtn");
const servicesDropdown = document.getElementById("servicesDropdown");

servicesBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = servicesDropdown.classList.toggle("open");
  servicesBtn.classList.toggle("open", isOpen);
});

document.addEventListener("click", () => {
  servicesDropdown.classList.remove("open");
  servicesBtn.classList.remove("open");
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileMenuClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
