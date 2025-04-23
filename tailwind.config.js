/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["helvetica", "sans-serif"],
        inter: ["inter"],
        montserrat: ["montserrat"],
      },
      backgroundImage: {
        bgChair: "url('/asset/chair.png')",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "80px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
        },
      },
    },
  },
  plugins: [],
};
