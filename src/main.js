import "./style.css";
import javascriptLogo from "./svg/javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import "flowbite";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { addClass } from "@splidejs/splide/src/js/utils";

gsap.registerPlugin(ScrollTrigger);

if (document.body.dataset.page === "home") {
  const splide = new Splide(".splide", {
    type: "loop",
    autoWidth: true,
    buttons: false,
    autoScroll: {
      speed: 1,
    },
  });
  splide.mount(window.splide.Extensions);
}

gsap.registerPlugin(ScrollToPlugin);

AOS.init();

let preloadTL = gsap.timeline();

const percentText = document.querySelector(".percentage");
const loadingBar = document.querySelector(".loading-bar");
const preloader = document.querySelector("#preloader");
const preloadLogo = document.querySelector(".preload-logo");
const loadingWrap = document.querySelector(".loadingWrap");

let progress = { value: 0 };

preloadTL
  .fromTo(
    preloader,
    {
      opacity: 0,
    },

    {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  )
  .to(progress, {
    value: 100,
    duration: 3,
    ease: "power2.out",
    onUpdate: function () {
      percentText.textContent = Math.round(progress.value) + "%";
    },
    onComplete: function () {
      percentText.textContent = "Loading Complete!";
    },
  })
  .to(
    loadingBar,
    {
      width: "100%",
      duration: 3,
      ease: "power2.out",
    },
    "<"
  )
  .to(loadingWrap, {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  })
  .to(
    preloadLogo,
    {
      opacity: 1,
      duration: 1,
    },
    "-=0.5"
  )
  .to(preloader, {
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: "power2.out",
    onComplete: function () {
      // ✅ Sembunyikan preloader
      preloader.style.display = "none";

      const mainContent = document.getElementById("main-content");
      const app = document.getElementById("app");

      [mainContent, app].forEach((el) => {
        if (el) {
          el.classList.remove("opacity-0");
          el.classList.add("opacity-100"); // Optional: efek fade-in kalau pakai Tailwind
        }
      });
    },
  });

export { preloadTL };

function loadHTML(id, file) {
  return fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Gagal memuat ${file}, status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      console.log(`File ${file} berhasil dimuat ke #${id}`);
    })
    .catch((error) => console.error("Error loading " + file, error));
}

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden-up");
    navbar.classList.remove("visible-down");
  } else {
    navbar.classList.remove("hidden-up");
    navbar.classList.add("visible-down");
  }

  lastScrollTop = scrollTop;
});

const isSpecialPage =
  document.querySelector(".service") || document.querySelector(".portofolio");

if (isSpecialPage) {
  let footer = document.querySelector(".footer-content");
  gsap.fromTo(
    footer,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: "footer",
        start: "center 90%",
        markers: false,
      },
    }
  );
} else {
  let footer = document.querySelector(".footer-content");
  gsap.fromTo(
    footer,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        markers: false,
      },
    }
  );
}
