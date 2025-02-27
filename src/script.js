const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
let isOpen = false;

// 
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("teacher-slider");
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");

  if (!container || !prevButton || !nextButton) return;

  container.style.scrollBehavior = "smooth"; // Animasi scroll

  // Menghitung lebar satu item slider
  const itemWidth = container.children[0].offsetWidth + 16; // 16px = gap antar item

  nextButton.addEventListener("click", function () {
    container.scrollLeft += itemWidth; // Geser ke kanan
  });

  prevButton.addEventListener("click", function () {
    container.scrollLeft -= itemWidth; // Geser ke kiri
  });
});


mobileMenuButton.addEventListener("click", () => {
  isOpen = !isOpen;

  // Toggle menu
  mobileMenu.classList.toggle("max-h-screen");
  mobileMenu.classList.toggle("opacity-100");
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("opacity-0");

  // Ganti ikon hamburger <-> silang
  if (isOpen) {
    menuIcon.innerHTML = `
      <line x1="6" y1="6" x2="18" y2="18" stroke-linecap="round"></line>
      <line x1="6" y1="18" x2="18" y2="6" stroke-linecap="round"></line>
    `;
  } else {
    menuIcon.innerHTML = `
      <line x1="4" y1="6" x2="20" y2="6" stroke-linecap="round"></line>
      <line x1="4" y1="12" x2="20" y2="12" stroke-linecap="round"></line>
      <line x1="4" y1="18" x2="20" y2="18" stroke-linecap="round"></line>
    `;
  }
});
