const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const downIcon = document.getElementById("down-icon");
const menuText = document.getElementById("menu-text");
let menuOpen = false;

mobileMenuButton.addEventListener("click", event => {
  event.stopPropagation(); // Cegah event klik keluar
  toggleMenu();
});

// Menutup menu jika klik di luar elemen menu
document.addEventListener("click", event => {
  if (menuOpen && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
    closeMenu();
  }
});

function toggleMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.remove("scale-y-0", "opacity-0");
    mobileMenu.classList.add("scale-y-100", "opacity-100");
    downIcon.classList.add("rotate-180");
    menuText.textContent = "Close";
  } else {
    closeMenu();
  }
}

function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove("scale-y-100", "opacity-100");
  mobileMenu.classList.add("scale-y-0", "opacity-0");
  downIcon.classList.remove("rotate-180");
  menuText.textContent = "Menu";
}

// Menu Mobile
document.addEventListener("DOMContentLoaded", () => {
  // Ambil semua link di dalam nav
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      // Ambil target anchor dari atribut href
      const targetId = link.getAttribute("href");

      // Cari parent <li> dari link yang diklik
      const parentLi = link.parentElement;
      // Cari elemen <li> berikutnya yang diasumsikan berisi ikon (gambar Down)
      const sibling = parentLi.nextElementSibling;

      if (sibling) {
        const img = sibling.querySelector("img");
        // Jika gambar ada dan src mengandung "Down"
        if (img && img.getAttribute("src").includes("Down")) {
          // Tambahkan kelas rotasi untuk memulai animasi
          img.classList.add("rotate-up");
          // Hapus kelas rotasi setelah 300ms agar gambar kembali ke posisi semula
          setTimeout(() => {
            img.classList.remove("rotate-up");
          }, 300);
        }
      }

      // Cegah aksi default agar animasi terlihat sebelum navigasi
      event.preventDefault();
      // Setelah animasi selesai (300ms), lakukan scroll ke target
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    });
  });
});

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

// popup contact
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
  popup.classList.remove("opacity-0", "pointer-events-none");
  setTimeout(() => {
    popup.children[0].classList.remove("opacity-0", "scale-90");
    popup.children[0].classList.add("opacity-100", "scale-100");
  }, 10);
});

closeBtn.addEventListener("click", () => {
  popup.children[0].classList.remove("opacity-100", "scale-100");
  popup.children[0].classList.add("opacity-0", "scale-90");
  setTimeout(() => {
    popup.classList.add("opacity-0", "pointer-events-none");
  }, 300);
});

// ====
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("slideContainer");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const scrollAmount = 300; // Sesuaikan dengan kebutuhan

  function updateButtonState() {
    if (container.scrollLeft <= 0) {
      prevButton.classList.add("opacity-50", "cursor-not-allowed");
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove("opacity-50", "cursor-not-allowed");
      prevButton.disabled = false;
    }

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      nextButton.classList.add("opacity-50", "cursor-not-allowed");
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove("opacity-50", "cursor-not-allowed");
      nextButton.disabled = false;
    }
  }

  function addClickEffect(button) {
    button.classList.add("bg-gray-300", "border-gray-500"); // Warna dan border saat diklik
    setTimeout(() => {
      button.classList.remove("bg-gray-300", "border-gray-500");
    }, 200);
  }

  prevButton.addEventListener("click", function () {
    if (container.scrollLeft > 0) {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      addClickEffect(prevButton);
    }
  });

  nextButton.addEventListener("click", function () {
    if (container.scrollLeft + container.clientWidth < container.scrollWidth) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      addClickEffect(nextButton);
    }
  });

  container.addEventListener("scroll", updateButtonState);
  updateButtonState();
});

// // slider section stories
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.getElementById("newSlideContainer");
  const prevButton = document.getElementById("newPrevButton");
  const nextButton = document.getElementById("newNextButton");
  const border = document.getElementById("borderIndicator");
  const cards = document.querySelectorAll("#newSlideContainer > div");
  
  let isMobile = window.innerWidth < 640;
  let cardWidth = isMobile ? slideContainer.offsetWidth : cards[0].offsetWidth + 24;
  let currentIndex = 0;

  function updateActiveCard() {
    cards.forEach((card, index) => {
      const textElement = card.querySelector("p.font-gloock");

      if (index === currentIndex) {
        card.classList.remove("text-gray-100");
        card.classList.add("text-dark");
        card.querySelector("img").classList.remove("opacity-50");
        textElement.classList.remove("text-gray-100");
        textElement.classList.add("text-dark");
      } else {
        card.classList.remove("text-dark");
        card.classList.add("text-gray-100");
        card.querySelector("img").classList.add("opacity-50");
        textElement.classList.remove("text-dark");
        textElement.classList.add("text-gray-100");
      }
    });

    updateBorder();
    checkButtons();
  }

  function updateBorder() {
    const totalWidth = cardWidth * (cards.length - 1);
    const scrollPosition = slideContainer.scrollLeft;
    const percentage = (scrollPosition / totalWidth) * 100;
    border.style.width = `${percentage}%`;
  }

  function moveNext() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      slideContainer.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
      updateActiveCard();
    }
  }

  function movePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      slideContainer.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
      updateActiveCard();
    }
  }

  function checkButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;

    prevButton.classList.toggle("opacity-50", prevButton.disabled);
    prevButton.classList.toggle("cursor-not-allowed", prevButton.disabled);
    nextButton.classList.toggle("opacity-50", nextButton.disabled);
    nextButton.classList.toggle("cursor-not-allowed", nextButton.disabled);
  }

  // Event listener untuk update ukuran saat resize
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 640;
    cardWidth = isMobile ? slideContainer.offsetWidth : cards[0].offsetWidth + 24;
  });

  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);
  slideContainer.addEventListener("scroll", updateBorder);

  // Inisialisasi pertama kali
  updateActiveCard();
});


// button hero
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("categoryContainer");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("hidden"); // Tampilkan/sembunyikan input
  categoryContainer.classList.toggle("hidden"); // Sembunyikan/tampilkan kategori
  searchInput.focus(); // Fokus ke input saat ditampilkan
});

// swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Default 1 card per slide
  spaceBetween: 10, // Jarak antar card
  loop: true, // Loop infinite
  autoplay: {
    delay: 3000, // 3 detik per slide
    disableOnInteraction: false, // Tetap autoplay setelah user swipe
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  observer: true,
  observeParents: true,
});

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
  const header = document.getElementById("site-header");
  const logo = document.getElementById("logo-img");
  const title = document.getElementById("site-title");
  const navLinks = document.querySelectorAll(".nav-link"); // Link menu desktop
  const desktopMenu = document.getElementById("desktop-menu");
  const menuIcons = desktopMenu.querySelectorAll("img");

  // Elemen mobile
  const menuText = document.getElementById("menu-text");
  const downIcon = document.getElementById("down-icon");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  const mobileIcons = document.querySelectorAll(".mobile-icon"); // Semua ikon mobile

  if (window.scrollY > 50) {
    // Desktop
    header.classList.add("bg-white/30", "backdrop-blur-md", "shadow-md");
    logo.classList.add("invert");
    title.classList.remove("text-white");
    title.classList.add("text-black");
    desktopMenu.classList.remove("text-white");
    desktopMenu.classList.add("text-black");
    navLinks.forEach(link => {
      link.classList.remove("text-white");
      link.classList.add("text-black");
    });
    menuIcons.forEach(icon => icon.classList.add("invert"));

    // Mobile
    menuText.classList.remove("text-white");
    menuText.classList.add("text-black");
    mobileMenuButton.classList.remove("text-white");
    mobileMenuButton.classList.add("text-black");
    mobileMenuLinks.forEach(link => {
      link.classList.remove("text-white");
      link.classList.add("text-black");
    });
    mobileIcons.forEach(icon => icon.classList.add("invert"));

    // Tambahkan background blur ke mobile dropdown menu
    mobileMenu.classList.add("bg-white/30", "backdrop-blur-md", "shadow-md");
  } else {
    // Desktop
    header.classList.remove("bg-white/30", "backdrop-blur-md", "shadow-md");
    logo.classList.remove("invert");
    title.classList.remove("text-black");
    title.classList.add("text-white");
    desktopMenu.classList.remove("text-black");
    desktopMenu.classList.add("text-white");
    navLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });
    menuIcons.forEach(icon => icon.classList.remove("invert"));

    // Mobile
    menuText.classList.remove("text-black");
    menuText.classList.add("text-white");
    mobileMenuButton.classList.remove("text-black");
    mobileMenuButton.classList.add("text-white");
    mobileMenuLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });
    mobileIcons.forEach(icon => icon.classList.remove("invert"));

    // Hapus efek background blur di mobile dropdown menu
    mobileMenu.classList.remove("bg-white/30", "backdrop-blur-md", "shadow-md");
  }
});


// swipper section our vision
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000, // Ubah sesuai kebutuhan
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });