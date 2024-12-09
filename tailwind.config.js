export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue', 'Arial', 'sans-serif'],
        // 'inter': ['Inter', 'sans-serif'],
        // 'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: { primary: '#7240FF', },
      container: {
        center: true,
        padding: '5rem',
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

