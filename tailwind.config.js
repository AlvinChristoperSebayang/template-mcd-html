/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body:['Darker Grotesque', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      default: ['Darker Grotesque', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      darkerGrotesque: ['Darker Grotesque', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      PlusJakartaSans: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
      firaCode: ['Fira Code', 'monospace'],  
      bricolage : ['Bricolage Grotesque', 'sans-serif'], 
  },

    extend: {},
  },
  plugins: [],
}

