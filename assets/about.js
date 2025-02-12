import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadTL } from '../main.js';

gsap.registerPlugin(ScrollTrigger);
let isMobile = window.innerWidth < 768;

const path = document.querySelector('#animatedSvg path');
const percentage = document.getElementById('percentage');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

let heroSection = gsap.timeline({paused:true});
let titleHero = document.querySelector('.titleHero');

if(titleHero){
  let splitText = new SplitType(titleHero, {
    types: 'lines',
  });
}

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

let descHero = document.querySelector('.description-hero');
if(descHero){
  let splitText = new SplitType(descHero, {
    types: 'lines',
  });
}
let descLines = document.querySelectorAll('.description-hero .line');
descLines.forEach(lineDesc => {
  let wrapperdesc = document.createElement('div');
  wrapperdesc.classList.add('line-wrapper');
  lineDesc.parentNode.insertBefore(wrapperdesc, lineDesc);
  wrapperdesc.appendChild(lineDesc);
});

descLines.forEach((line, index) => {
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
  top:'5rem',
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
  preloadTL.eventCallback("onComplete", function() {
    heroSection.play();
  });

};
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
    start: `${isMobile ? '10%' : '22%'} center`,
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
},'>.1')

if (!isMobile) {
  doctorTl2.fromTo('.doctorCard', {
    opacity: 0,
    duration: 0.5,
    y: '100px',

  }, {
    opacity: 1,
    duration: 0.5,
    y: '0px',
    stagger: 0.2
  },'>.1');
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
let hamburgerButton = document.querySelector('.hamburger-bars');
let mobileNav = document.querySelector('.mobileNav');
hamburgerButton.addEventListener('click', function () {
  hamburgerButton.classList.toggle('active');
  mobileNav.classList.toggle('active');
  console.log('active')
})