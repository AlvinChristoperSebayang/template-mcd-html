import "flowbite";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { addClass } from "@splidejs/splide/src/js/utils";
import { preloadTL } from "./main.js";
import Aos from "aos";

gsap.registerPlugin(ScrollTrigger);

let heroSection = gsap.timeline({ paused: true });
let titleHero = document.querySelectorAll(
  ".hero-text__wrapper p, .hero-text__wrapper h1, .hero-text__wrapper span, .hero-text__wrapper .title-mobile"
);

const heroImage = document.querySelector(".hero-image__wrapper");

heroSection.fromTo(
  heroImage,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  }
);

if (titleHero) {
  let splitText = new SplitType(titleHero, {
    types: "line",
  });
}

let lines = document.querySelectorAll(".section-hero .line");
lines.forEach((line) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("line-wrapper");
  wrapper.classList.add("overflow-hidden");
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);
});

lines.forEach((line, index) => {
  heroSection.fromTo(
    line,
    {
      xPercent: -100,
      transformOrigin: "50% 50%",
    },
    {
      xPercent: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    },
    "<.2"
  );
});

new SplitType(".paragraphHero", {
  type: "lines",
});

let paragraphHero = document.querySelectorAll(".paragraphHero .line");
paragraphHero.forEach((line, index) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("line-wrapper");
  wrapper.classList.add("overflow-hidden");
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);

  heroSection.fromTo(
    line,
    {
      yPercent: 100,
      transformOrigin: "50% 50%",
    },
    {
      yPercent: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    },
    "<.2"
  );
});

window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function () {
    heroSection.play();
    // console.log('done')
  });
};

let contact = document.querySelectorAll(".contact-list li *");

contact.forEach((li) => {
  if (window.innerWidth < 750) {
    gsap.fromTo(
      li,
      {
        yPercent: 150,
      },
      {
        yPercent: 0,
        duration: 0.5,
        ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
        scrollTrigger: {
          trigger: li,
          start: "center 80%",
          toggleActions: "play none none none",
        },
      },
      "<.2"
    );
  } else {
    gsap.fromTo(
      li,
      {
        xPercent: 150,
      },
      {
        xPercent: 0,
        duration: 0.5,
        ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
        scrollTrigger: {
          trigger: li,
          start: "center 80%",
          toggleActions: "play none none none",
        },
      },
      "<.2"
    );
  }
});

let contactBanner = document.querySelector(".banner");

let contactBannerTitle = document.querySelectorAll(
  ".section-get-in .content-wrap"
);

gsap.fromTo(
  contactBanner,
  {
    yPercent: 150,
  },
  {
    yPercent: 0,
    duration: 2,
    ease: CustomEase.create("custom", "M0,0 C0.602,-0.003 0.503,1.001 1,1 "),
    scrollTrigger: {
      trigger: ".section-get-in",
      start: "center 120%",
      markers: false,
    },
  }
);
