
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const heroImg = document.querySelector("section.relative.top-0");
let menuOpen = false;

// Event scroll untuk cek posisi hamburger terhadap hero image
window.addEventListener("scroll", () => {
  const heroBottom = heroImg.offsetTop + heroImg.offsetHeight;
  const buttonTop = mobileMenuButton.getBoundingClientRect().top + window.scrollY;

  if (buttonTop < heroBottom) {
    // Di atas hero image → ubah jadi hitam
    mobileMenuButton.classList.add("text-black");
  } else {
    // Di luar hero image → bebas (misalnya tetap hitam atau balik ke putih)
    mobileMenuButton.classList.remove("text-");
  }
});

// Event klik untuk buka/tutup menu
mobileMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", event => {
  if (menuOpen && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
    closeMenu();
  }
});

function toggleMenu() {
  menuOpen = !menuOpen;

  mobileMenuButton.classList.toggle("open", menuOpen);
  mobileMenuButton.classList.toggle("closed", !menuOpen);

  if (menuOpen) {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
}

function closeMenu() {
  menuOpen = false;
  mobileMenuButton.classList.remove("open");
  mobileMenuButton.classList.add("closed");

  // Geser keluar ke kanan dan fade-out
  mobileMenu.classList.remove("translate-x-0", "opacity-100");
  mobileMenu.classList.add("translate-x-full", "opacity-0");

  document.body.style.overflow = "";
}
window.dispatchEvent(new Event("scroll"));
// humburger end

// dropdown  menu mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle-mobile");

  toggles.forEach(toggle => {
    const menu = toggle.closest("li").querySelector(".dropdown-menu");
    const arrow = toggle.querySelector("svg");

    toggle.addEventListener("click", e => {
      e.stopPropagation();

      const isOpen = menu.classList.contains("visible");

      document.querySelectorAll(".dropdown-menu").forEach(m => {
        m.classList.remove("max-h-96", "opacity-100", "visible", "scale-y-100");
        m.classList.add("max-h-0", "opacity-0", "invisible", "scale-y-95");
      });

      document.querySelectorAll(".dropdown-toggle-mobile svg").forEach(icon => icon.classList.remove("rotate-180"));

      if (!isOpen) {
        menu.classList.remove("max-h-0", "opacity-0", "invisible", "scale-y-95");
        menu.classList.add("max-h-96", "opacity-100", "visible", "scale-y-100");
        arrow.classList.add("rotate-180");
      }
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.classList.remove("max-h-96", "opacity-100", "visible", "scale-y-100");
      menu.classList.add("max-h-0", "opacity-0", "invisible", "scale-y-95");
    });

    document.querySelectorAll(".dropdown-toggle-mobile svg").forEach(icon => icon.classList.remove("rotate-180"));
  });
});
// end

// button
const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(button => {
  const icon = button.querySelector(".iconbtn"); // Ambil icon di dalam button

  button.addEventListener("click", () => {
    if (icon) {
      icon.classList.toggle("iconbtn-rotate");
    }
  });
});

// popup contact*
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
  popup.classList.remove("hidden"); // Menampilkan popup
  popup.classList.add("open"); // Menambahkan kelas open untuk mengaktifkan popup
  document.body.classList.add("overflow-hidden"); // Menonaktifkan scroll
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden"); // Menyembunyikan popup
  popup.classList.remove("open"); // Menonaktifkan popup
  document.body.classList.remove("overflow-hidden"); // Mengaktifkan kembali scroll
});

// insight*
document.addEventListener("DOMContentLoaded", function () {
  // Swiper otomatis
  new Swiper(".swiper-auto", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  // Swiper manual dengan geser 1 card per navigasi dan loop infinity
  new Swiper(".swiper-manual", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: false, // aktifkan infinite loop
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// button hero*
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("categoryContainer");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("hidden"); // Tampilkan/sembunyikan input
  categoryContainer.classList.toggle("hidden"); // Sembunyikan/tampilkan kategori
  searchInput.focus(); // Fokus ke input saat ditampilkan
});

// swiper section partner*
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });
});

// your vision
document.querySelectorAll(".view-button").forEach(button => {
  button.addEventListener("click", function () {
    const img = this.querySelector(".arrow-icon");
    const text = this.querySelector(".view-text");

    img.classList.toggle("move-back");
    text.classList.toggle("text-blue-500"); // Mengubah warna teks saat diklik
  });
});

// header scroll
window.addEventListener("scroll", function () {
  const menuContainer = document.getElementById("menu-container");
  const logoImg = document.getElementById("logo-img");
  const siteTitle = document.getElementById("site-title");
  const heroSection = document.querySelector("section.relative.top-0");
  const footer = document.querySelector("footer");

  if (!menuContainer || !siteTitle || !heroSection || !footer) return;

  const heroHeight = heroSection.offsetHeight;
  const currentScrollY = window.scrollY;
  const isMobile = window.innerWidth < 640;
  const footerTop = footer.getBoundingClientRect().top;
  const threshold = window.innerHeight * 0.0;
  const isAtFooter = footerTop < threshold;
  const isPastHero = currentScrollY > heroHeight;

  const navLinks = document.querySelectorAll("#desktop-menu .nav-link");
  const navIcons = document.querySelectorAll(".nav-icon");

  if (isAtFooter) {
    // Footer terlihat
    menuContainer.classList.remove("fade-out", "text-white");
    menuContainer.classList.add("fade-in", "text-black");

    siteTitle.classList.remove("fade-out", "text-white");
    siteTitle.classList.add("fade-in", "text-black");

    navLinks.forEach(link => {
      link.classList.remove("text-white");
      link.classList.add("text-black");
    });

    logoImg.classList.remove("fade-out");
    logoImg.classList.add("fade-in");

    navIcons.forEach(icon => {
      icon.style.filter = "brightness(0) saturate(100%)"; // hitam
    });

    return;
  }

  if (isPastHero) {
    // Sudah melewati hero, tapi belum sampai footer
    menuContainer.classList.remove("fade-in", "text-black");
    menuContainer.classList.add("fade-out", "text-white");

    siteTitle.classList.remove("fade-in", "text-black");
    siteTitle.classList.add("fade-out", "text-white");

    navLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });

    if (isMobile) {
      logoImg.classList.remove("fade-in", "icon-black");
      logoImg.classList.add("fade-out");
    } else {
      logoImg.classList.remove("fade-out");
      logoImg.classList.add("fade-in", "icon-black");
    }

    navIcons.forEach(icon => {
      icon.style.filter = ""; // reset
    });
  } else {
    // Masih di hero section
    menuContainer.classList.remove("fade-out", "text-black");
    menuContainer.classList.add("fade-in", "text-white");

    siteTitle.classList.remove("fade-out", "text-black");
    siteTitle.classList.add("fade-in", "text-white");

    navLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });

    logoImg.classList.remove("fade-out", "icon-black");
    logoImg.classList.add("fade-in");

    navIcons.forEach(icon => {
      icon.style.filter = ""; // reset
    });
  }
});

// scroll*
const heroImge = document.querySelector("section.relative.top-0");
let heroHeight = heroImg ? heroImg.offsetHeight : 0;

// Gunakan passive event listener untuk scroll
window.addEventListener(
  "scroll",
  () => {
    // Jika tinggi hero sudah disimpan, gunakan heroHeight yang sudah di-cache
    if (window.scrollY > heroHeight) {
      mobileMenuButton.classList.add("after-hero");
    } else {
      mobileMenuButton.classList.remove("after-hero");
    }
  },
  { passive: true },
);

// fillter galery*
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Atur warna tombol: semua kembali ke text-secondary, kecuali tombol yang diklik jadi text-black
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("text-black");
      btn.classList.add("text-secondary");
    });
    button.classList.remove("text-secondary");
    button.classList.add("text-black");

    // Filter gallery
    const category = button.getAttribute("data-category");
    document.querySelectorAll(".gallery-item").forEach(item => {
      if (category === "All" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Fungsi smooth scroll dengan offset

const targetElement = document.querySelector("#target");
if (targetElement) {
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
}
