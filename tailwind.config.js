/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Darker Grotesque", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      default: ["Darker Grotesque", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      darkerGrotesque: ["Darker Grotesque", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      PlusJakartaSans: ["Plus Jakarta Sans", "Poppins", "sans-serif"],
      firaCode: ["Fira Code", "monospace"],
      bricolage: ["Bricolage Grotesque", "sans-serif"],
      PlayfairDisplay: ["Playfair Display", "serif"],
      Ephesis: ["Ephesis", "cursive"],
      DancingScript: ["Dancing Script", "serif"],
      TimesNewRoman: ["TimesNewRoman", "serif"],
    },
    extend: {
      colors: {
        primary: "#4E4E50",
      },
    },
  },
  plugins: [],
};
