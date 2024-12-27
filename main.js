import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let isMobile = window.innerWidth < 768;

const path = document.querySelector('#animatedSvg path');
const percentage = document.getElementById('percentage');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

let preloadTL = gsap.timeline()

preloadTL.to('#animatedSvg', {
  opacity: 1,
  duration: 0.5,
  ease: 'power2.inOut'
})
preloadTL.to(path, {
  strokeDashoffset: 0,
  duration: 2,
  ease: 'power2.inOut',
  onUpdate: function () {
    const progress = (1 - (parseFloat(path.style.strokeDashoffset) / pathLength));
    percentage.textContent = Math.round(progress * 100) + '%';
  },
  onComplete: function () {
    percentage.textContent = '100%';
    preloadTL.to(percentage, {
      opacity: 0,
      duration: 0.5,
      onComplete: function () {
        preloadTL.to('#animatedSvg', {
          fill: '#06E51C',
          duration: 0.5
        })
        preloadTL.to('#animatedSvg path', {
          stroke: '#06E51C',
          duration: 0.5
        }, '<')
        if (isMobile) {
          preloadTL.to('.logo-wrapper .relative svg', {
            width: '40px',
            height: '40px',
            left: '72%',

            duration: 0.5,
          }, '>.5')
        } else {
          preloadTL.to('.logo-wrapper .relative svg', {
            width: '80px',
            height: '80px',
            left: '94%',

            duration: 0.5,
          }, '>.5')
        }
        preloadTL.to('.logo-wrapper .textBranding', {
          opacity: 1,
          duration: 0.5,
          ease:'power4.inOut'

        }, '>.2')
           preloadTL.to('.preload',{
             top:'-100%',
             duration:1,
             ease:'power4.inOut'
           },'>.2')
      }
    })
  }
});
let heroSection = gsap.timeline({paused:true});
let titleHero = document.querySelector('.titleHero');

let splitText = new SplitType(titleHero, {
  types: 'lines',
});

let lines = document.querySelectorAll('.titleHero .line');
lines.forEach(line => {
  let wrapper = document.createElement('div');
  wrapper.classList.add('line-wrapper');
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);
});

lines.forEach((line, index) => {
  heroSection.fromTo(line, {
    yPercent: 300,
    rotation: -15,
    transformOrigin: '50% 50%',
  }, {
    yPercent: 0,
    rotation: 0,
    duration: 0.8,
    ease: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
  },'<.2');
});

heroSection.to('.patternHero',{
  scale:1,
  opacity:1,
  duration:0.5,
  ease:'power3.inOut'
},'<')
heroSection.to('.ornamentLogoSpin',{
  top:'20px',
  opacity:1,
  duration:1,
  ease:'power3.inOut'
},'<.3')
heroSection.to('.ornamentPlusTitle',{
  bottom:'-32px',
  opacity:1,
  duration:1,
  ease:'power3.inOut'
},'<')  
heroSection.to('.phoneOrnament--wrapper',{
  opacity:1,
  duration:0.5,
  marginTop:'50px',
},'<.3')
heroSection.to('.bar_phone--wrapper',{
  bottom:'0px',
  opacity:1,
  duration:0.5,
  ease:'power3.inOut'
},'>')
// heroSection.to('.contentPhone',{
//   marginTop:'-350px',
//   duration:3,
//   ease:'power1.inOut'
// },'<.3')
window.onload = function () {
  preloadTL.play();
  preloadTL.eventCallback("onComplete", function() {
    heroSection.play();
  });

};

let hamburgerButton = document.querySelector('.hamburger-bars');
let mobileNav = document.querySelector('.mobileNav');
hamburgerButton.addEventListener('click', function () {
  hamburgerButton.classList.toggle('active');
  mobileNav.classList.toggle('active');
})
const navbar = document.querySelector('header');
let lastScrollY = window.scrollY;
function handleScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > lastScrollY) {
    navbar.classList.add('scroll-down');
  } else if (window.scrollY < lastScrollY) {
    navbar.classList.remove('scroll-down');
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', handleScroll);

const swiper = new Swiper('.sliderApproach', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.next-slider',
    prevEl: '.prev-slider',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.6,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 32,

    },
    640: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
  },
});
let doctorTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-introducing",
    start: "top center",
    end: "20% center",
    // markers: true
  }


});
doctorTl1.to('.image-logoOrnament', {
  opacity: 1,
  duration: 2
})

let doctorTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-introducing",
    start: "22% center",
    end: "40% center",
    // markers: true
  }
});

doctorTl2.to('.image-logoOrnament', {
  rotation: 180,
  transformOrigin: "center center",
  duration: 1,
  width: 48,
  height: 48,
});
doctorTl2.fromTo('.titleAnimate', {
  opacity: 0,
  duration: 0.5,
  y: '100px'
}, {
  opacity: 1,
  duration: 0.5,
  y: '0px',
  stagger: .2
})
let doctorTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-introducing",
    start: "40% center",
    end: "60% center",
    // markers: true
  }
});
if (!isMobile) {
  doctorTl3.fromTo('.doctorCard', {
    opacity: 0,
    duration: 0.5,
    y: '100px',

  }, {
    opacity: 1,
    duration: 0.5,
    y: '0px',
    stagger: 0.2
  });
} else {
  let cardDoctors = document.querySelectorAll('.doctorCard');
  cardDoctors.forEach((card, index) => {
    gsap.fromTo(card, {
      opacity: 0,
      y: '100px'
    }, {
      scrollTrigger: {
        trigger: card,
        start: 'top 50%',
        // markers:true
      },
      opacity: 1,
      y: '0px',
      duration: 0.5
    });
  });
 
}

let featuresTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".approachDesign",
    start: "20% center",
    // markers: true,
  }
});
featuresTl.fromTo('.approachDesign .headSection', {
  opacity: 0,
  duration: 2,
  y: '100px'
}, {
  opacity: 1,
  y: '0px',
  stagger: .2,
})
featuresTl.fromTo('.approachDesign .swiper-slide', {
  opacity: 0,
  duration: 2,
  y: '100px'
}, {
  opacity: 1,
  y: '0px',
  stagger: .2,
  ease: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
})
let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "10% center",
    end: "80% center",
    // markers: true
  }
});
footerTl.fromTo('.footerContent', {
  opacity: 0,
  duration: 0.5,
  y: '80px'
}, {
  opacity: 1,
  duration: 0.5,
  y: '0px',
  stagger: .1
})

gsap.fromTo('.footer-navigation',{
  opacity:0,
  duration: 0.5,
  y: '80px'
},{
  scrollTrigger: {
    trigger: "footer",
    start: "35% center",
    end: "100% center",
    // markers: true
  },
  opacity: 1,
  duration: 0.5,
  y: '0px',
  stagger: .1,
  ease:'power2.out'
})