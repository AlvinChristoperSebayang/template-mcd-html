/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'mobile': '375px',
      'laptop': '1024px',
      'desktop': '1440px'
    }
  },
  plugins: [],
}

