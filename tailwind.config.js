/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        darker: ['"Darker Grotesque"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

