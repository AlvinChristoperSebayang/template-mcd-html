import './style.css'

// document.querySelector('#site-header').innerHTML = `
//   <div class="navigation-wrapper">
//     <div>Header Area</div>
//   </div>
// `

// document.querySelector('#site-footer').innerHTML = `
//   <div class="footer-wrapper">
//     <div>Footer Area aaaa</div>
//   </div>
// `

import AOS from 'aos';
AOS.init();


const hamburger = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#mobile-menu')
const close = document.querySelector('#close')

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden')
  mobileMenu.classList.toggle('block')
  console.log('click')
})
close.addEventListener('click',()=>{
  mobileMenu.classList.remove('block')
  mobileMenu.classList.toggle('hidden')
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2.5,
    centerSlides: true,

    
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  const typed = new Typed('#typed-output', {
    strings: ["We will provide very good quality goods for your dream home and your extended family, products that are guaranteed and made of very strong materials"],
    typeSpeed: 25,    // Kecepatan pengetikan
    backSpeed: 25,    // Kecepatan penghapusan
    loop: true        // Animasi akan terus berulang
  });
  const typedFooter = new Typed('#typed-output-footer', {
    strings: ["Lörem ipsum farade kroresade planat. Semipons ner,deciliga men niponade. Lörem ipsum Lörem ipsum farade kroresade planat. Semipons ner, deciliga men niponade. Lörem ipsum "],
    typeSpeed: 25,    // Kecepatan pengetikan
    backSpeed: 25,    // Kecepatan penghapusan
    loop: true        // Animasi akan terus berulang
  });