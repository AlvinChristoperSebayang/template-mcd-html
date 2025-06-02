/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        1360: "1360px",
      },
      fontFamily: {
        instrument: ['"Instrument Sans"'],
        "plus-jakarta": ['"Plus Jakarta Sans"'],
        playfair: ["Playfair"],
      },
      rotate: {
        "-180": "-180deg",
      },
      colors: {
        primary: "#a0c093",
        secondary: "#FBBF24",
        customBlack: "#161111",
      },
    },
  },
  plugins: [],
};
