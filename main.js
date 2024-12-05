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

// Aos
function setAOSDelay() {
    const target = document.getElementById('aos-target');
    const isLaptop = window.matchMedia('(min-width: 640px)').matches; 

    if (isLaptop) {
      target.setAttribute('data-aos-delay', '300'); 
    } else {
      target.removeAttribute('data-aos-delay');
    }
  }

  setAOSDelay();

  window.addEventListener('resize', setAOSDelay);

  AOS.init();
  // Aos END

  // Dropdown
  const menuButton = document.getElementById("menuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownLinks = dropdownMenu.querySelectorAll("a");

  window.addEventListener("load", () => {
    setTimeout(() => {
      dropdownMenu.classList.remove("hidden");
    }, 0); 
  });

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
  });

  dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuButton.classList.remove("open");
    });
  });
  // Dropdown N

  // Animated Figure
  document.addEventListener("DOMContentLoaded", function () {
    const figure = document.getElementById("animated-figure");

    function setTopPosition() {
      if (window.innerWidth >= 1280) {
        const viewportHeight = window.innerHeight;
        const topPosition = viewportHeight / 0;
        figure.style.top = `${topPosition}px`;
        figure.style.transform = "translate(-50%, -10%)";
      } else if (window.innerWidth >= 1024) {
        figure.style.setProperty("--target-top", "30%");
      } else if (window.innerWidth >= 768) {
        const viewportHeight = window.innerHeight;
        const topPosition = viewportHeight / 3;
        figure.style.top = `${topPosition}px`;
        figure.style.transform = "translate(-50%, 5%)";
      } else if (window.innerWidth >= 640) {
        const viewportHeight = window.innerHeight;
        const topPosition = viewportHeight / 3;
        figure.style.top = `${topPosition}px`;
        figure.style.transform = "translate(-50%, 0%)";
      } else if (window.innerWidth <= 640) {
        const viewportHeight = window.innerHeight;
        const topPosition = viewportHeight / 3;
        figure.style.top = `${topPosition}px`;
        figure.style.transform = "translate(-50%, 5%)";
      }
    }

    setTopPosition();

    setTimeout(() => {
      figure.classList.add("animate-top");
    }, 100);

    window.addEventListener("resize", setTopPosition);
  });  
  // Animated Figure N

  // Number Transision
  function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let current = Math.min(start + range * (progress / duration), end); 

      element.textContent = formatNumber(Math.floor(current)) + "+";

      if (current < end) {
        requestAnimationFrame(step);
      } else {
        element.textContent = formatNumber(end) + "+"; 
      }
    }

    requestAnimationFrame(step);
  }

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'; 
    }
    return num.toString(); 
  }

  let duration = 4000; 
  animateCounter("user-count", 0, 2000, duration);  
  animateCounter("download-count", 0, 100000, duration); 
  // Number Transision N

  // Path Animation
  document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".Anime");
    const paths = document.querySelectorAll(".path-animate");

    function checkVisibility() {
      const rect = footer.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        paths.forEach((path, index) => {
          setTimeout(() => {
            path.classList.add("visible");
          }, index * 100); 
        });
      } else {
        paths.forEach((path) => {
          path.classList.remove("visible");
        });
      }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  });
  // Path Animation N
  
  // Slider Testimonial
  function initSwiper(selector, reverseDirection = false) {
  const swiper = new Swiper(selector, {
    loop: true,
    autoplay: {
      delay: 0, 
      reverseDirection: reverseDirection,
    },
    speed: 3000,
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  
  const cards = document.querySelectorAll(`${selector} .swiper-slide`);

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        swiper.autoplay.stop(); 
      });

      card.addEventListener('mouseleave', () => {
        swiper.autoplay.start(); 
      });
    });

  }

  initSwiper('.sample-slider');
  initSwiper('.sample-slider-right', true);
  // Slide Tertimonial N
  
  // Slide
  function initSwiperCustom(selector, reverseDirection = false) {
  const swiper = new Swiper(selector, {
    loop: true,
    autoplay: {
      delay: 0, 
      disableOnInteraction: false,
      reverseDirection: reverseDirection,
    },
    speed: 1000,
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 8,

      },
      1800: {
        slidesPerView: 12,
        spaceBetween: 20,
      },
    },
  });
  }
  initSwiperCustom('.swiper-costume')
  // Slide End
  
  // Smooth Scrolling
  document.querySelectorAll("nav ul li a").forEach(navItem => {
    navItem.addEventListener("click", function(event) {
      event.preventDefault();
      
      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
      
      document.querySelectorAll("nav ul li a").forEach(link => {
          link.classList.remove("active");
      });
      
      this.classList.add("active");
    });
  });
  // Smooth Scrolling End
