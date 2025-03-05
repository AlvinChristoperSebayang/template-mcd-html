import Lenis from "@studio-freight/lenis";

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

// Fungsi toggle dropdown
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

// Fungsi untuk navigasi dengan Lenis
function navigateTo(targetId) {
  const dropdown = document.getElementById("dropdownMenu");
  const hamburger = document.getElementById("menuToggle");
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

  // Tutup dropdown dengan animasi
  dropdown.classList.add("-translate-x-full");
  hamburger.classList.remove("active"); 
  lenis.start();

  setTimeout(() => {
    lenis.scrollTo(targetElement, {
      duration: 1.5,
      offset: -50,
    });
  }, 50);
}

// Fungsi toggle modal
function toggleModal() {
  const modal = document.getElementById("modalOverlay");

  modal.classList.toggle("hidden");

  if (!modal.classList.contains("hidden")) {
    lenis.stop();
  } else {
    lenis.start();
  }
}

window.toggleDropdown = toggleDropdown;
window.navigateTo = navigateTo;
window.toggleModal = toggleModal;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    navigateTo(targetId);
  });
});

