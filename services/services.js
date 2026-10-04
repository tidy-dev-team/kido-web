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

var indexServicesBtn = document.getElementById("indexServicesBtn");
var indexServicesDropdown = document.getElementById("indexServicesDropdown");

function positionDropdown() {
  var rect = indexServicesBtn.getBoundingClientRect();
  indexServicesDropdown.style.top = (rect.bottom + 8) + "px";
  indexServicesDropdown.style.left = rect.left + "px";
}

indexServicesBtn.addEventListener("click", function(e) {
  e.stopPropagation();
  var isOpen = indexServicesDropdown.classList.toggle("open");
  if (isOpen) positionDropdown();
});

document.addEventListener("click", function() {
  indexServicesDropdown.classList.remove("open");
});

window.addEventListener("scroll", function() {
  indexServicesDropdown.classList.remove("open");
}, { passive: true });

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileMenuClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
