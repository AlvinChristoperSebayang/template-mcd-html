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
  ".hero-text__wrapper p, hero-text__wrapper h1, .hero-text__wrapper span, .hero-text__wrapper .title-mobile"
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

window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function () {
    heroSection.play();
    // console.log('done')
  });
};

const targetElements = document.querySelectorAll(
  "#vissionSection span, #vissionSection h2, #vissionSection p"
);

targetElements.forEach((el) => {
  const split = new SplitType(el, { types: "lines" });

  split.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("line-wrapper", "overflow-hidden");
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);

    gsap.fromTo(
      line,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});

let gridItems = document.querySelectorAll(".grid-items");
gridItems.forEach((item, index) => {
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
        trigger: sectionRightChoiceHeadWrap,
        start: "top 90%",
      },
    }
  );
});

let ourTeamHead = document.querySelector(".section-our-team .heading-section");
let ourTeamSubHead = document.querySelector(".section-our-team .sub-heading");
let ourTeamDescription = document.querySelector(
  ".section-our-team .section-desc"
);

let ourTeamheadingWrap = document.querySelectorAll(
  ".section-our-team .heading-wrap"
);
transitionTitle(
  ourTeamSubHead,
  ourTeamHead,
  ourTeamDescription,
  ourTeamheadingWrap
);

function transitionTitle(subhead, head, desc, trigger) {
  gsap.fromTo(
    subhead,
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
    head,
    {
      yPercent: 150,
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

  gsap.fromTo(
    desc,
    {
      yPercent: 150,
    },
    {
      yPercent: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
      },
    }
  );
}

transitionItems(gridItems, ourTeamheadingWrap);

let ourTeamItems = document.querySelectorAll(
  ".section-our-team .splide__slide"
);

let ourTeamitemsWrap = document.querySelector(
  ".section-our-team .gridteam-wrap"
);

transitionItems(ourTeamItems, ourTeamitemsWrap);

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

let headOurTeamBottom = document.querySelectorAll(
  ".section-our-team .section-bottom-wrap .heading-section"
);
let descOurTeamBottom = document.querySelectorAll(
  ".section-our-team .section-bottom-wrap .description-section"
);
let buttonOurTeamBottom = document.querySelectorAll(
  ".section-our-team .section-bottom-wrap .button-openPosition"
);
let ourBottomWrap = document.querySelectorAll(
  ".section-our-team .section-bottom-wrap"
);

transitionOpenPosition(
  headOurTeamBottom,
  descOurTeamBottom,
  buttonOurTeamBottom,
  ourBottomWrap
);

function transitionOpenPosition(head, desc, button, trigger) {
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
      yPercent: 150,
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

  gsap.fromTo(
    button,
    {
      yPercent: 150,
    },
    {
      yPercent: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
      },
    }
  );
}

const sectionContactNow = document.querySelectorAll(
  ".section-contact-now h2, .section-contact-now p, .section-contact-now span"
);

sectionContactNow.forEach((el) => {
  const split = new SplitType(el, { types: "lines" });

  split.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("line-wrapper", "overflow-hidden");
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);

    gsap.fromTo(
      line,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});

const counter = document.getElementById("counter");
const counter2 = document.getElementById("counter2");
const targetValue = 200;
const durationInSeconds = 2;
const targetValue2 = 500;
const durationInSeconds2 = 2;

let obj = { val: 0 };

gsap.to(obj, {
  val: targetValue,
  duration: durationInSeconds,
  ease: "power1.out",
  onUpdate: () => {
    document.getElementById("counter").textContent = Math.floor(obj.val) + "+";
  },
  onComplete: () => {
    document.getElementById("counter").textContent = targetValue + "+";
  },
  scrollTrigger: {
    trigger: counter,
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.to(obj, {
  val: targetValue2,
  duration: durationInSeconds2,
  ease: "power1.out",
  onUpdate: () => {
    document.getElementById("counter2").textContent = Math.floor(obj.val) + "+";
  },
  onComplete: () => {
    document.getElementById("counter2").textContent = targetValue2 + "+";
  },
  scrollTrigger: {
    trigger: counter2,
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

let contactNowButton = document.querySelector(
  ".section-contact-now .contact-now-button"
);
let contactNowLink = document.querySelector(
  ".section-contact-now .contact-now-link"
);
let contactNowButtonWrap = document.querySelector(
  ".section-contact-now .desktop-button-wrap"
);

transitionMultiButton(contactNowButton, contactNowLink, contactNowButtonWrap);

let imageTextWrap = document.querySelectorAll(
  ".section-image-with-text span, .section-image-with-text h2, .section-image-with-text p"
);

imageTextWrap.forEach((el) => {
  const split = new SplitType(el, { types: "lines" });

  split.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("line-wrapper", "overflow-hidden");
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);

    gsap.fromTo(
      line,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});

let imageTextButton = document.querySelector(
  ".section-image-with-text .imageText-button"
);
let imageTextLink = document.querySelector(
  ".section-image-with-text .imageText-link"
);
let imageTextButtonWrap = document.querySelector(
  ".section-image-with-text .imageText-button-wrap"
);

transitionMultiButton(imageTextButton, imageTextLink, imageTextButtonWrap);

function transitionMultiButton(button1, button2, trigger) {
  gsap.fromTo(
    button1,
    {
      xPercent: 150,
    },
    {
      xPercent: 0,
      duration: 0.8,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
      },
    }
  );

  gsap.fromTo(
    button2,
    {
      xPercent: -150,
    },
    {
      xPercent: 0,
      duration: 0.8,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
      },
    }
  );
}
