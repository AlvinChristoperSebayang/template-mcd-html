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
      fontSize: {
        xl: ['64px', '88px'],
        lg: ['48px', '64px'],
        md: ['40px', '54px'],
        sm: ['32px', '42px'],
        xs: ['24px', '32px'],
      },
      center: true,
      container: {
        padding:{
          mobile: '24px',
          laptop: '40px',
          desktop: '60px',
        },
        breakpoints: {
          'mobile': '375px',
          'laptop': '1024px',
          'tablet': '768px',
          'desktop': '1440px'  
        }

      }
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px'
    },
  },
  plugins: [],
}

