export default {
  content: ["./*.{html,js}", "./src//*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/background_footer.png')",
        footerMobile: "url('/mobileFooterBg.png')",
        footerLight: "url('/footerLight.png')",
        header: "url('/desktopHeadBg.png')",
        mobileHeader: "url('/mobileHeadBg.png')",
      },
      fontFamily: {
        "helvetica-neue": ["Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: { primary: "#7240FF" },
      fontSize: {
        "responsive-h2": [
          "64px",
          {
            sm: "32px",
            md: "40px",
            lg: "48px",
          },
        ],
      },
      container: {
        center: true,
        padding: "0rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
