/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,  // Center container by default
      padding: {
        DEFAULT: '1rem', // Padding default
        sm: '1.5rem',  // Padding for small screens
        md: '2rem',    // Padding for medium screens
        lg: '2.5rem',  // Padding for large screens
        xl: '3rem',    // Padding for extra large screens
      },
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#152D32',
        secondary: '#FFC100',
        paragraf : '#A1ABAD',
        balckText : '#091416',
        footer : '#081315',
      },

    },
  },
  plugins: [],
}

