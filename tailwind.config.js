/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      center: true,
      container: {
        'mobile': '375px',
        'laptop': '1024px',
        'desktop': '1440px'  
      }
    },
    screens: {
      'mobile': '375px',
      'laptop': '1024px',
      'desktop': '1440px'
    }
  },
  plugins: [],
}

