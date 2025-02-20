/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Sesuaikan dengan struktur proyekmu
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
