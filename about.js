import "./about.css";

window.scrollToOurStory = function scrollToOurStory() {
  const ourStorySection = document.getElementById("ourStory");
  ourStorySection.scrollIntoView({ behavior: "smooth" });
};

const input = document.querySelectorAll("input");

input.forEach((element) => {
  element.classList.add("focus:outline-none");
});
