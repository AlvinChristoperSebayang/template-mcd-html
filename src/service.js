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

gsap.registerPlugin(ScrollTrigger);

let heroSection = gsap.timeline({ paused: true });

let titleHero = document.querySelectorAll(
  ".mobileHero-textContent p, .mobileHero-textContent h1, .mobileHero-textContent span, .desktopHero-textWrap p, .desktopHero-textWrap .secondline, desktopHero-textWrap h1, .desktopHero-textWrap h1"
);

let splitText = new SplitType(titleHero, {
  types: "line",
});

splitText.lines.forEach((line) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("line-wrapper");
  wrapper.classList.add("overflow-hidden");
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);
  heroSection.fromTo(
    line,
    {
      yPercent: 200,
      transformOrigin: "50% 50%",
    },
    {
      yPercent: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    },
    "<0.2"
  );
});

window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function () {
    heroSection.play();
  });
};

gsap.fromTo(
  ".content-wrap",
  {
    height: 0,
  },
  {
    height: 424,
    duration: 1.2,
    ease: CustomEase.create("custom", "M0,0 C0.602,-0.003 0.503,1.001 1,1 "),
    scrollTrigger: {
      trigger: ".section-get-in",
      start: "80% 80%",
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
    duration: 0.5,
    delay: 0.2,
    ease: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    scrollTrigger: {
      trigger: ".section-get-in",
      start: "center 90%",
    },
  }
);
