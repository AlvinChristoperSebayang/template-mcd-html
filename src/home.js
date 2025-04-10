import "flowbite";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { addClass } from "@splidejs/splide/src/js/utils";
import { preloadTL } from "./main.js";
import Aos from "aos";

gsap.registerPlugin(ScrollTrigger);

Aos.init({
  duration: 1000,
});

let heroSection = gsap.timeline({ paused: true });
let titleHero = document.querySelectorAll(
  ".section-hero p, .section-hero h1, .section-hero span"
);

const heroImage = document.querySelector(".hero-image__wrapper");
heroSection.fromTo(
  heroImage,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.8,
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
      duration: 0.8,
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
      xPercent: -100,
      transformOrigin: "50% 50%",
    },
    {
      xPercent: 0,
      duration: 0.8,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    },
    "<.2"
  );
});

let mainButton = document.querySelector(".section-hero .main-btn");
let wordButton = document.querySelector(".section-hero .btn-text");

if (window.innerWidth > 768) {
  heroSection
    .fromTo(
      mainButton,
      { xPercent: 100 },
      { xPercent: 0, duration: 0.8, ease: "cubic-bezier(0.36, 0, 0.66, -0.56)" }
    )
    .fromTo(
      wordButton,
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      },
      "<"
    );
} else {
  heroSection
    .fromTo(
      mainButton,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.8, ease: "cubic-bezier(0.36, 0, 0.66, -0.56)" }
    )
    .fromTo(
      wordButton,
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      },
      "<"
    );
}

window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function () {
    heroSection.play();
    // console.log('done')
  });
};

let uiSubHead = document.querySelector(".section-ui-ux .sub-heading");
let uiHead = document.querySelector(".section-ui-ux .heading-section");
let uiDescription = document.querySelector(".section-ui-ux .section-desc");
let sectionRightSubHead = document.querySelector(
  ".section-rightChoice .sub-heading"
);
let sectionRightHead = document.querySelector(
  ".section-rightChoice .heading-section"
);
let sectionRightDescription = document.querySelector(
  ".section-rightChoice .section-desc"
);

gsap.set(
  [
    uiSubHead,
    uiHead,
    uiDescription,
    sectionRightSubHead,
    sectionRightHead,
    sectionRightDescription,
  ],
  { yPercent: 100 }
);

const sectionUiUx = gsap.timeline({
  scrollTrigger: {
    trigger: uiSubHead,
    start: "top bottom",
  },
});

const rightChoiceTL = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRightSubHead,
    start: "top bottom",
  },
});

sectionUiUx
  .to(uiSubHead, {
    yPercent: 0,
    duration: 0.6,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  })
  .to(uiHead, {
    yPercent: 0,
    duration: 0.6,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  })
  .to(uiDescription, {
    yPercent: 0,
    duration: 0.6,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  });

rightChoiceTL
  .to(sectionRightSubHead, {
    yPercent: 0,
    duration: 0.6,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  })
  .to(sectionRightHead, {
    yPercent: 0,
    duration: 0.6,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  })
  .to(sectionRightDescription, {
    yPercent: 0,
    duration: 0.6,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  });

const sectionRightChoiceHeadWrap = document.querySelector(
  ".section-rightChoice .heading-wrap"
);
let ornament = document.querySelector(".section-rightChoice .ornament");

let gridItems = document.querySelectorAll(".grid-items");

gsap.fromTo(
  ornament,
  {
    yPercent: 250,
  },
  {
    yPercent: 0,
    duration: 0.8,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    scrollTrigger: {
      trigger: sectionRightChoiceHeadWrap,
      start: "top 90%",
    },
  }
);

let testimonialHeadingWrap = document.querySelectorAll(
  ".section-testimonial .heading-wrap"
);

let testimonialHead = document.querySelector(
  ".section-testimonial .heading-section"
);
let testimonialDescription = document.querySelector(
  ".section-testimonial .section-desc"
);

let aboutUsHead = document.querySelector(".section-aboutUs .heading-section");
let aboutUsDescription = document.querySelector(
  ".section-aboutUs .section-desc"
);
let aboutUsheadingWrap = document.querySelectorAll(
  ".section-aboutUs .heading-wrap"
);

let portofolioHead = document.querySelector(
  ".section-portofolio .heading-section"
);
let portofolioDescription = document.querySelector(
  ".section-portofolio .section-desc"
);

let portofolioheadingWrap = document.querySelectorAll(
  ".section-portofolio .heading-wrap"
);

transitionTitle(
  testimonialHead,
  testimonialDescription,
  testimonialHeadingWrap
);
transitionTitle(aboutUsHead, aboutUsDescription, aboutUsheadingWrap);
transitionTitle(portofolioHead, portofolioDescription, portofolioheadingWrap);

function transitionTitle(head, desc, trigger) {
  gsap.fromTo(
    head,
    {
      yPercent: 150,
    },
    {
      yPercent: 0,
      duration: 0.8,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
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
      duration: 0.8,
      delay: 0.3,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
      },
    }
  );
}

transitionItems(gridItems, sectionRightChoiceHeadWrap);

let portofolioItems = document.querySelectorAll(
  ".section-portofolio .splide__slide"
);

let portofolioitemsWrap = document.querySelector(
  ".section-portofolio .items-wrap"
);

let aboutUsItems = document.querySelectorAll(".section-aboutUs .splide__slide");

let aboutUsitemsWrap = document.querySelector(".section-aboutUs .items-wrap");

transitionItems(portofolioItems, portofolioitemsWrap);
transitionItems(aboutUsItems, aboutUsitemsWrap);

function transitionItems(item, trigger) {
  item.forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        yPercent: 200,
      },
      {
        yPercent: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: trigger,
          start: "top 90%",
        },
      }
    );
  });
}

let seeMoreButton = document.querySelector(".button-see-more");
gsap.fromTo(
  seeMoreButton,
  {
    yPercent: -150,
  },
  {
    yPercent: 0,
    duration: 0.8,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    scrollTrigger: {
      trigger: seeMoreButton,
      start: "top 90%",
    },
  }
);
