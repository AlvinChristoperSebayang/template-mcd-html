 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}", // file-file di dalam folder src
    "./*.html",],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        asap: ['Asap', 'sans-serif'],
      },
      colors: {
        putih: '#FFFFFF',
        abu: '#A7ABB6',
      }
    },
  },
  plugins: [],
}