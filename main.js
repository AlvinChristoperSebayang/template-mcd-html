import "./style.css";
import { Collapse } from "flowbite";
import "flowbite";

// Tambahkan Header dan Footer
document.querySelector("#site-header").innerHTML = `
  <div class="navigation-wrapper">
    <div>Header Area</div>
  </div>
`;

document.querySelector("#site-footer").innerHTML = `
  <div class="footer-wrapper">
    <div>Footer Area</div>
  </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  // Target elemen navbar yang akan dikontrol
  const $targetEl = document.getElementById("navbar-default");
  const $triggerEl = document.getElementById("nav-button-mobile");

  // Pastikan elemen ada sebelum inisialisasi
  if ($targetEl && $triggerEl) {
    // Opsi instance Flowbite
    const options = {
      onCollapse: () => console.log("Navbar ditutup"),
      onExpand: () => console.log("Navbar dibuka"),
      onToggle: () => console.log("Navbar toggle"),
    };

    // Inisialisasi Collapse dengan benar (hanya 3 parameter)
    const collapse = new Collapse($targetEl, $triggerEl, options);

    // Contoh penggunaan event listener
    $triggerEl.addEventListener("click", () => {
      collapse.toggle();
    });
  } else {
    console.error("Navbar atau tombol tidak ditemukan.");
  }
});
