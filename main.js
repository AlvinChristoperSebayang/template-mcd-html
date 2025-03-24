import './style.css'


document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector("#typing p");
  const text = textElement.innerText;
  textElement.innerText = ""; // Kosongkan teks awal

  function typeText() {
    let index = 0;
    function typing() {
      if (index < text.length) {
        textElement.innerHTML += text[index];
        index++;
        setTimeout(typing, 22); // Kecepatan mengetik
      }
    }
    typing();
  }

function isFooterVisible() {
  const footer = document.getElementById("site-footer");
  const rect = footer.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

  function onScroll() {
    if (isFooterVisible()) {
      typeText();
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});


// import { gsap } from "gsap-trial";

// /* The following plugins are Club GSAP perks */
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";


// gsap.registerPlugin(ScrollSmoother,MorphSVGPlugin);

// animate(element, { x: 100 }, { type: "spring" })

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

