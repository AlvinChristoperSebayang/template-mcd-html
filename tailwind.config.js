/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '1360': '1360px',
      },
      fontFamily: {
        'instrument': ['"Instrument Sans"'],
        'plus-jakarta': ['"Plus Jakarta Sans"'], 
      },
      rotate: {
        '-180': '-180deg',
      }
    },
  },
  plugins: [],
}

