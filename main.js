import "./style.css";
import "flowbite";

document.addEventListener("DOMContentLoaded", function () {
  // Load header dan footer terlebih dahulu
  Promise.all([
    loadHTML("site-header", "header.html"),
    loadHTML("site-footer", "footer.html"),
  ]).then(() => {
    console.log("Header & Footer berhasil dimuat");

    // Cek apakah navbar ada setelah header dimuat
    setTimeout(() => {
      const $targetEl = document.getElementById("navbar-default");
      const $triggerEl = document.getElementById("nav-button-mobile");

      console.log("Cek navbar-default:", $targetEl);
      console.log("Cek nav-button-mobile:", $triggerEl);

      if ($targetEl && $triggerEl) {
        const options = {
          onCollapse: () => console.log("Navbar ditutup"),
          onExpand: () => console.log("Navbar dibuka"),
          onToggle: () => console.log("Navbar toggle"),
        };

        const collapse = new Flowbite.Collapse($targetEl, $triggerEl, options);

        $triggerEl.addEventListener("click", () => {
          console.log("Tombol navbar diklik");
          collapse.toggle();
        });
      } else {
        console.error(
          "Navbar atau tombol tidak ditemukan setelah header dimuat."
        );
      }
    }, 500); // Tunggu sebentar untuk memastikan elemen sudah masuk ke DOM
  });
});

// Fungsi untuk memuat HTML ke dalam elemen tertentu
function loadHTML(id, file) {
  return fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Gagal memuat ${file}, status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      console.log(`File ${file} berhasil dimuat ke #${id}`);
    })
    .catch((error) => console.error("Error loading " + file, error));
}
