/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['helvetica', 'sans-serif'],
        inter: ['inter'],
        montserrat: ['montserrat'],
      },
    },
  },
  plugins: [],
}

