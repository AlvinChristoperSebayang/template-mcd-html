import "./style.css";

import Lenis from "@studio-freight/lenis";
// Lenis scrolling start
const lenis = new Lenis({
  duration: 1,
  lerp: 0.1,
  smooth: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Lenis scrolling end

// path active
const links = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();
let activeLink = null;

// Tandai link aktif di awal
links.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("text-white");
    activeLink = link;
  }
});

// Scroll handler
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (activeLink) {
    if (scrollTop > 100) {
      activeLink.classList.remove("text-white");
      activeLink.classList.add("text-blue");
    } else {
      activeLink.classList.remove("text-blue");
      activeLink.classList.add("text-white");
    }
  }
});
// path active

// toggle dropdown mobile start
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  const hamburger = document.getElementById("menuToggle");

  dropdown.classList.toggle("-translate-x-full");
  hamburger.classList.toggle("active");

  if (!dropdown.classList.contains("-translate-x-full")) {
    lenis.stop();
  } else {
    lenis.start();
  }
}
// toggle dropdown mobile end

// navigasi click dengan Lenis start
function navigateTo(targetId) {
  const dropdown = document.getElementById("dropdownMenu");
  const hamburger = document.getElementById("menuToggle");
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

  dropdown.classList.add("-translate-x-full");
  hamburger.classList.remove("active");
  lenis.start();

  setTimeout(() => {
    lenis.scrollTo(targetElement, {
      duration: 1.5,
      offset: -50,
    });
  });
}
// navigasi click dengan Lenis end

// toggle modal stop scrolling
function toggleModal() {
  const modal = document.getElementById("modalOverlay");

  modal.classList.toggle("hidden");

  if (!modal.classList.contains("hidden")) {
    lenis.stop();
  } else {
    lenis.start();
  }
}

// Pastikan fungsi tersedia di window
window.toggleDropdown = toggleDropdown;
window.navigateTo = navigateTo;
window.toggleModal = toggleModal;

// Smooth scroll untuk semua anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    navigateTo(targetId);
  });
});


