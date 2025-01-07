/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        breakpoint: {
          mobile: '375px',
          tablet: '768px',
          laptop: '1024px',
          desktop: '1440px'
        }
      },
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px'
    }
  },
  plugins: [],
}

