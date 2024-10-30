import "./style.css";
import "./text.css";
import "./component.css";
import { type } from "jquery";

// Set the countdown date
const countdownDate = new Date("Dec 1, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function () {
  // Get current time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("schedule-days").innerHTML = days;
  document.getElementById("schedule-hours").innerHTML = hours;
  document.getElementById("schedule-minutes").innerHTML = minutes;
  document.getElementById("schedule-seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("schedule-countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//animasi text textillate

// Fungsi untuk memulai animasi Textillate
function animateTextillate(element) {
  $(element).textillate({
    minDisplayTime: 10,
    in: { effect: "fadeIn" }, // Ganti dengan efek animasi yang kamu inginkan
    type: "word",
  });
}

// Menggunakan Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateTextillate(entry.target); // Mulai animasi saat elemen terlihat
      observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi
    }
  });
});

// Pilih elemen dan mulai mengamati
document.querySelectorAll(".tlt").forEach((el) => observer.observe(el));

//_________SETTING_ANIMASI_AOS__________
function setAOSAnimation() {
  const elementAnchor = document.querySelector(".animate-element");

  if (window.innerWidth <= 768) {
    // Jika ukuran layar <= 768px (mobile)
    elementAnchor.removeAttribute("data-aos-anchor"); // Hapus data-aos-anchor
  } else {
    elementAnchor.setAttribute("data-aos-anchor", ".female-name"); // Tambahkan kembali pada layar yang lebih besar
  }

  // Refresh AOS setelah mengubah atribut
  AOS.refresh();
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("load", setAOSAnimation);

document.addEventListener("DOMContentLoaded", function () {
  function copyToClipboard() {
    const input = document.getElementById("account-number");
    navigator.clipboard
      .writeText(input.value)
      .then(() => {
        alert("Berhasil mengcopy nomor rekening");
      })
      .catch((err) => {
        console.error("Gagal menyalin: ", err);
      });
  }

  // Tambahkan event listener ke input
  const inputField = document.getElementById("account-number");
  inputField.addEventListener("click", copyToClipboard);
});

// Event listener untuk tombol hamburger
document.getElementById("hamburger").addEventListener("click", function () {
  const hamburgerIcon = document.getElementById("hamburger");
  const menu = document.getElementById("navigation-mobile");

  if (menu.classList.contains("is-visible")) {
    menu.classList.remove("is-visible");
    hamburgerIcon.classList.remove("is-active");
    document.body.classList.remove("overflow-hidden");
  } else {
    menu.classList.add("is-visible");
    hamburgerIcon.classList.add("is-active");
    document.body.classList.add("overflow-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Event listener untuk item menu dalam navbar
document.querySelectorAll("#navigation-mobile ul li").forEach((item) => {
  item.addEventListener("click", () => {
    const hamburgerIcon = document.getElementById("hamburger");
    const menu = document.getElementById("navigation-mobile");

    // Menghapus kelas 'is-active' dan 'is-visible' saat menu item diklik
    menu.classList.remove("is-visible");
    hamburgerIcon.classList.remove("is-active");
    document.body.classList.remove("overflow-hidden");
  });
});
