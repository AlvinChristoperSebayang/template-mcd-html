/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['"Instrument Sans"'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'], 
      },
      rotate: {
        '-180': '-180deg',
      }
    },
  },
  plugins: [],
}

