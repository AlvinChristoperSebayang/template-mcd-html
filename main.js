import './style.css'
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
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 20,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.custom-next',
//     prevEl: '.custom-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
var swipers = new Swiper(".testimonial", {
  loop:true,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
    navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});