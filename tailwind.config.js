/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1360px',
      '2xl': '1496px',
    },
    // padding:{
    //   DEFAULT: '1rem',
    //   sm: '2rem',
    //   lg: '4rem',
    //   xl: '5rem',
    //   '2xl': '6rem',
    // },
    extend: {
      colors:{
        first:"#F1F2F6",
        primary: "#101A36",
        second :"#FF8600",
        third:"#AEB8FE",
        forth:"#758BFD",
        fifth:"#27187E",
        border:"#26395B80",
        border1:"#26395BCC",
      },
      fontFamily: {
        abril:["Abril Fatface", "sans-serif"],
        jost:["Jost", "sans-serif"],
        lato:["Lato", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"],
        nunito:["Nunito", "sans-serif"],
        opensans:["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
