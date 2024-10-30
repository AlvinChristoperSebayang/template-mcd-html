/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      content: {
        flowerRight: 'url("./public/ornament/flower_right.svg")',
        flowerLeft: 'url("./public/ornament/flower_left.svg")',
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        serif: [
          '"Times New Roman"',
          "Times",
          "ui-serif",
          "Georgia",
          "Cambria",
          "serif",
        ],
        dancing: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
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
          sm: "30px",
          lg: "4rem",
          xl: "57px",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
