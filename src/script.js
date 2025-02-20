const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
let isOpen = false;

// 





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
