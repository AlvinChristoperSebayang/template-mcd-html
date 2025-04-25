import "./style.css";
AOS.init({
  once: true,
});

//element selalu di atas ketika pertama kali dan refresh start
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});
//element selalu di atas ketika pertama kali dan refresh end

// dropdown mobile
window.toggleDropdown = function toggleDropdown(event) {
  const dropdown = document.getElementById("dropdownMenu");

  dropdown.classList.toggle("hidden");
};
// dropdown mobile end

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-scrolled");
  } else {
    navbar.classList.remove("bg-scrolled");
  }
});

const input = document.querySelectorAll("input");

input.forEach((element) => {
  element.classList.add("focus:outline-none");
});

const btnSearch = document.getElementById("btn-search");
const searchInput = document.getElementById("search-input");
const searchWrap = document.getElementById("search-wrap");
const pageIcon = document.querySelector(".nav-items");
const navMenu = document.getElementById("menuWrap");

//Search Button
btnSearch.addEventListener("click", function (event) {
  event.stopPropagation();

  if (!btnSearch.classList.contains("opened")) {
    btnSearch.classList.add("opened");
    searchInput.classList.add("active-search");
    searchInput.focus();
    searchWrap.classList.add("border-b-2");
    btnSearch.setAttribute("aria-expanded", "true");
    if (window.innerWidth < 768) {
      pageIcon.classList.add("hidden");
      navMenu.classList.add("hidden");
    }
  } else {
    location.reload();
  }
});

document.addEventListener("click", (event) => {
  if (!searchWrap.contains(event.target)) {
    btnSearch.classList.remove("opened");
    searchWrap.classList.remove("border-b-2");
    searchInput.classList.remove("active-search");
    btnSearch.setAttribute("aria-expanded", "false");
    if (window.innerWidth < 768) {
      pageIcon.classList.remove("hidden");
      navMenu.classList.remove("hidden");
    }
  }
});
// End Search Button
