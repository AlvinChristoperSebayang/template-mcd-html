/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        first:"#F1F2F6",
        primary: "#101A36",
        second :"#FF8600",
        third:"#AEB8FE",
        forth:"#758BFD",
        fifth:"#27187E",
        border:"#26395B80"
      },
      fontFamily: {
        abril:["Abril Fatface", "sans-serif"],
        jost:["Jost", "sans-serif"],
        lato:["Lato", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"],
        nunito:["Nunito", "sans-serif"]
      },
    },
  },
  plugins: [],
};
