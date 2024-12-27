/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
    theme: {
      screens: {
        'sm': '375px',    // Extra small devices (phones)
        'md': '768px',    // Medium devices (tablet)
        'lg': '1024px',   // Large devices (small desktops)
        'xl': '1280px',   // Extra large devices (large desktops)
        'xl2': '1440px',  // 2x Extra large devices (larger screens)
      },
      container: {
        center: true,  // Center container by default
        padding: {
          DEFAULT: '1rem', // Padding default
          sm: '1.5rem',  // Padding for small screens
          md: '2rem',    // Padding for medium screens
          lg: '40px',  // Padding for large screens
          xl: '60px',    // Padding for extra large screens
          xl2: '120px',    // Padding for extra large screens
        },
      },
    extend: {
      fontFamily: {
        satoshi: ["satoshi" , "sans-serif"],
      },
    },
  },
  plugins: [],
}