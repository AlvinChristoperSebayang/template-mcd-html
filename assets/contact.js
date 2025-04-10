import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadTL } from "./main.js";

gsap.registerPlugin(ScrollTrigger);
let isMobile = window.innerWidth < 768;

let heroSection = gsap.timeline({ paused: true });

const splitElements = [
  { selector: ".titleHero", type: "words" },
  { selector: ".hero-description", type: "lines" },
];

splitElements.forEach((item) => {
  const el = document.querySelector(item.selector);
  if (el) {
    new SplitType(el, {
      types: item.type,
    });
  }
});

heroSection.fromTo(
  ".hero-section span",
  {
    xPercent: -100,
    opacity: 0,
  },
  {
    xPercent: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.inOut",
  }
);

let splitTextHero = document.querySelectorAll(".titleHero .word");
splitTextHero.forEach((words, index) => {
  heroSection.fromTo(
    words,
    {
      xPercent: -100,
      opacity: 0,
    },
    {
      xPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.inOut",
    },
    "<0.2"
  );
});

let heroDescription = document.querySelectorAll(".hero-description .line");

heroDescription.forEach((line) => {
  heroSection.fromTo(
    line,
    {
      yPercent: 100,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.inOut",
    },
    "<0.2"
  );
});

if (isMobile) {
  let cardContent = document.querySelectorAll(".card-item ");
  cardContent.forEach((line, index) => {
    heroSection.fromTo(
      line,
      {
        xPercent: -300,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          // markers: true,
        },
      },
      "<0.2"
    );
  });

  let textForm = document.querySelectorAll(".content-form h2, .content-form p");
  textForm.forEach((line, index) => {
    gsap.fromTo(
      line,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          // markers: true,
        },
      },
      "<0.2"
    );
  });

  let inputForm = document.querySelectorAll(
    ".content-form input, .content-form button"
  );
  inputForm.forEach((line) => {
    gsap.fromTo(
      line,
      {
        xPercent: 300,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          // markers: true,
        },
      },
      "<0.2"
    );
  });
} else {
  let cardContent = document.querySelectorAll(".card-item ");
  cardContent.forEach((line, index) => {
    heroSection.fromTo(
      line,
      {
        xPercent: -300,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          // markers: true,
        },
      },
      "<0.2"
    );
  });

  let textForm = document.querySelectorAll(".content-form h2, .content-form p");
  textForm.forEach((line, index) => {
    heroSection.fromTo(
      line,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          // markers: true,
        },
      },
      "<0.2"
    );
  });

  let inputForm = document.querySelectorAll(
    ".content-form input, .content-form button"
  );
  inputForm.forEach((line) => {
    heroSection.fromTo(
      line,
      {
        xPercent: 300,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          // markers: true,
        },
      },
      "<0.2"
    );
  });
}

window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function () {
    heroSection.play();
    // console.log('done')
  });
};
