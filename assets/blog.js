import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateAboutHeader = () => {
  const blogLabel = document.querySelector(".aboutHeader .label");
  const blogTitle = document.querySelector(".aboutHeader h1");
  const blogText = document.querySelector(".aboutHeader p");

  gsap.set([blogLabel, blogTitle, blogText], { opacity: 0, y: 50 });

  ScrollTrigger.create({
    trigger: blogLabel,
    start: "top 80%",
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(blogLabel, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
        .to(
          blogTitle,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "+=0.3"
        )
        .to(
          blogText,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    },
    once: true,
  });
};

const animateAboutFirstListBlog = () => {
  const firstListBlog = document.querySelector(".firstListBlog");
  const firstBlogThumbnail = firstListBlog.querySelector(".thumbnailFirstBlog");
  const firstBlog = firstListBlog.querySelector(".contentFirstBlog");
  const blogList = firstListBlog.querySelector(".blogList");
  const blogListItems = blogList.querySelectorAll(".blogList .card");

  gsap.set([firstBlog, ...blogListItems], { opacity: 0, y: 50 });
  gsap.set(firstBlogThumbnail, { opacity: 0, scale: 1.2 });

  ScrollTrigger.create({
    trigger: firstListBlog,
    start: "top 80%",
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(firstBlog, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.3,
      }).to(
        firstBlogThumbnail,
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    },
    once: true,
  });

  ScrollTrigger.create({
    trigger: blogListItems,
    start: "top 80%",
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(blogListItems, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
  });
};

const animateListPopularBlog = () => {
  const popularTitle = document.querySelector(".popularBlog h2");
  const popularText = document.querySelector(".popularBlog p");
  const listBLog = document.querySelectorAll(".popularBlog .card");

  gsap.set([popularTitle, popularText, listBLog], { opacity: 0, y: 50 });

  ScrollTrigger.create({
    trigger: ".popularBlog .card",
    start: "top 80%",
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(listBLog, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".popularBlog",
    start: "top 80%",
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(popularTitle, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }).to(
        popularText,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    },
    once: true,
  });
};

const handleResize = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    gsap.set(".aboutHeader .label, .aboutHeader h1, .aboutHeader p", { y: 30 });
    gsap.set(".firstListBlog .contentFirstBlog, .blogList .card", { y: 30 });
    gsap.set(".popularBlog h2, .popularBlog p, .popularBlog .card", { y: 30 });
  } else {
    gsap.set(".aboutHeader .label, .aboutHeader h1, .aboutHeader p", { y: 50 });
    gsap.set(".firstListBlog .contentFirstBlog, .blogList .card", { y: 50 });
    gsap.set(".popularBlog h2, .popularBlog p, .popularBlog .card", { y: 50 });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  animateAboutHeader();
  animateAboutFirstListBlog();
  animateListPopularBlog();
  window.addEventListener("resize", handleResize);
});