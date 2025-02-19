const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
let isOpen = false;

mobileMenuButton.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    // Membuka menu dengan transisi
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-screen", "opacity-100");
    // Memutar ikon hamburger (misal 90 derajat)
    menuIcon.classList.add("rotate-90");
  } else {
    // Menutup menu dengan transisi
    mobileMenu.classList.remove("max-h-screen", "opacity-100");
    mobileMenu.classList.add("max-h-0", "opacity-0");
    menuIcon.classList.remove("rotate-90");
  }
});
