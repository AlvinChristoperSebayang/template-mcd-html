/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
