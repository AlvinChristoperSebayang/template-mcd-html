import './style.css'
import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", function () {
  // Pilih elemen footer
  const footer = document.querySelector("footer");

  // Fungsi untuk menjalankan animasi teks
  const startTypingAnimation = () => {
    new TypeIt("#typing", {
      strings: [""],
      speed: 20,
      cursor: false,
      startDelay: 900,
    }).go();

    new TypeIt("#typing1", {
      speed: 100,
      cursor: false,
    }).go();
  };

  // Intersection Observer untuk memantau footer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Jalankan animasi jika footer terlihat
          startTypingAnimation();

          // Hentikan observer setelah animasi dijalankan
          observer.unobserve(footer);
        }
      });
    },
    { threshold: 0.1 } // Animasi akan dimulai ketika 10% footer terlihat
  );

  // Mulai mengamati footer
  observer.observe(footer);
});


import { gsap } from "gsap-trial";

/* The following plugins are Club GSAP perks */
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";


gsap.registerPlugin(ScrollSmoother,MorphSVGPlugin);

animate(element, { x: 100 }, { type: "spring" })

// document.querySelector('#site-header').innerHTML = `
//   <div class="navigation-wrapper">
//     <div>Header Area</div>
//   </div>
// `

// document.querySelector('#site-footer').innerHTML = `
//   <div class="footer-wrapper">
//     <div>Footer Area</div>
//   </div>
// `

