import "./style.css";
import "flowbite";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { preloadTL } from "./main.js";

AOS.init({
  duration: 1000,
  once: true,
});

let heroSection = gsap.timeline({ paused: true });

gsap.registerPlugin(ScrollTrigger);

let titleHero = document.querySelectorAll(
  ".hero-text__wrapper p, .hero-text__wrapper h1, .hero-text__wrapper span"
);

let splitText = new SplitType(titleHero, {
  types: "line",
});

splitText.lines.forEach((line) => {
  heroSection.fromTo(
    line,
    {
      xPercent: -150,
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

window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function () {
    heroSection.play();
  });
};

gsap.fromTo(
  ".section-get-in > div",
  {
    height: 0,
  },
  {
    height: 424,
    duration: 2,
    ease: CustomEase.create("custom", "M0,0 C0.602,-0.003 0.503,1.001 1,1 "),
    scrollTrigger: {
      trigger: ".section-get-in",
      start: "center 120%",
      markers: false,
    },
  }
);

gsap.fromTo(
  ".section-get-in .text-wrap",
  {
    xPercent: -100,
  },
  {
    xPercent: 0,
    duration: 1,
    delay: 0.2,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    scrollTrigger: {
      trigger: ".section-get-in",
      start: "center 120%",
    },
  }
);

let portofolioSubHeading = document.querySelector(
  ".section-portofilio-item .subHead-section"
);

let portofolioHeadingWrap = document.querySelector(
  ".section-portofilio-item .heading-wrap"
);

let portfolioHead = document.querySelector(
  ".section-portofilio-item .heading-section"
);
let portfolioDescription = document.querySelector(
  ".section-portofilio-item .section-desc"
);

transitionTitle(
  portofolioSubHeading,
  portfolioHead,
  portfolioDescription,
  portofolioHeadingWrap
);

function transitionTitle(subHead, head, desc, trigger) {
  gsap.fromTo(
    head,
    {
      yPercent: -150,
    },
    {
      yPercent: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "center 90%",
      },
    }
  );

  gsap.fromTo(
    desc,
    {
      yPercent: -150,
    },
    {
      yPercent: 0,
      duration: 0.5,
      delay: 0.3,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "center 90%",
      },
    }
  );

  gsap.fromTo(
    subHead,
    {
      yPercent: -150,
    },
    {
      yPercent: 0,
      duration: 0.5,
      delay: 0.3,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "center 90%",
      },
    }
  );
}

let seeMoreButton = document.querySelector(".button-viewDetails");
gsap.fromTo(
  seeMoreButton,
  {
    yPercent: -300,
  },
  {
    yPercent: 0,
    duration: 0.5,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    scrollTrigger: {
      trigger: seeMoreButton,
      start: "center 90%",
    },
  }
);
