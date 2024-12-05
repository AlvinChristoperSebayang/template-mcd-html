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
      container:{
        center: true,
        padding: '0rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      }
    },
  },
  plugins: [],
}
