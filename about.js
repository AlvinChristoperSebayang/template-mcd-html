import "./about.css";

window.scrollToOurStory = function scrollToOurStory() {
  const ourStorySection = document.getElementById("ourStory");
  ourStorySection.scrollIntoView({ behavior: "smooth" });
};
