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
  if (
    window.scrollY > 50 &&
    !this.window.location.pathname.includes("contact.html")
  ) {
    navbar.classList.add("bg-scrolled");
  } else {
    navbar.classList.remove("bg-scrolled");
  }
});

const input = document.querySelectorAll("input");

input.forEach((element) => {
  element.classList.add("focus:outline-none");
});
