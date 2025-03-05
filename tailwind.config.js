/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // Sesuaikan dengan struktur proyekmu
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "3.7rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('./public/header-bg-mobile.png')",
        "hero-mobile2": "url('./public/mobile-bg2.png')",
        "gradient-custom": "linear-gradient(to top, #A0A5B0 0%, #FFFFFF 37%)",
        "gradient-custom-left":
          "linear-gradient(to left, #A0A5B0 0%, #FFFFFF 37%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
