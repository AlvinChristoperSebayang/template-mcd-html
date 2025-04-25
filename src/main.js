document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const menuLinks = document.getElementById("menu-links");
  const logoImg = document.getElementById("logo-img");
  const target = document.getElementById("target");
  const footer = document.getElementById("site-footer");
  const hamburgerBtn = document.getElementById("mobile-menu-button");

  if (!header || !menuLinks || !logoImg || !target || !footer || !hamburgerBtn) {
    console.error("Pastikan semua elemen dengan ID yang disebut ada di HTML");
    return;
  }

  function isFooterAtTop(el) {
    const r = el.getBoundingClientRect();
    return r.top <= 10;
  }

  function onScroll() {
    const pastHero = window.scrollY > target.offsetHeight;
    const footerReachedTop = isFooterAtTop(footer);
    const isMobile = window.innerWidth <= 768;

    if (footerReachedTop) {
      // Di bagian footer → semuanya jadi hitam dan logo muncul kembali
      if (isMobile) logoImg.classList.remove("hidden");
      header.classList.add("text-black");
      menuLinks.classList.remove("opacity-0", "pointer-events-none");
      logoImg.classList.remove("filter", "invert");
      hamburgerBtn.classList.remove("after-hero");
    } else if (pastHero) {
      // Setelah target tapi belum footer → logo hilang (hanya mobile)
      if (isMobile) logoImg.classList.add("hidden");
      header.classList.remove("text-black");
      menuLinks.classList.add("opacity-0", "pointer-events-none");
      logoImg.classList.add("filter", "invert");
      hamburgerBtn.classList.add("after-hero");
    } else {
      // Di bagian awal → logo tampil
      if (isMobile) logoImg.classList.remove("hidden");
      header.classList.remove("text-black");
      menuLinks.classList.remove("opacity-0", "pointer-events-none");
      logoImg.classList.remove("filter", "invert");
      hamburgerBtn.classList.remove("after-hero");
    }
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll); // agar responsif saat resize
  onScroll(); // jalankan saat load pertama kali
});

// Observer tambahan jika tetap ingin mempertahankan (boleh dihapus jika pakai logika scroll saja)
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("target");
  const hamburgerBtn = document.getElementById("mobile-menu-button");

  if (!target || !hamburgerBtn) {
    console.error("Pastikan ada elemen dengan ID 'target' dan 'mobile-menu-button'");
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hamburgerBtn.classList.remove("after-hero");
        } else {
          hamburgerBtn.classList.add("after-hero");
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  observer.observe(target);
});


// humburger
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const heroImg = document.querySelector("div.relative.top-0");
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
