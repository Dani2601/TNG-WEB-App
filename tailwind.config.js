/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "700px",
      md: "1025px",
      lg: "1374px",
      mobileS:"320px",
      mobileM:"375px",
      mobileL:"425px",
      tablet:"768px",
      laptop:"1024px",
      laptopL:"1440px",
      laptop4k:'2560px'
    },
    darkMode: "class",
    extend: {
      colors: {
        tdm: {
          pink: "#FF98C3",
          darkerpink: "#F987BA",
          lightpink: "#F7B7D3",
          darkpink: "#ec5084",
        },
        gootopia: {
          green: "#BDCA7A",
          purp: "#972F78",
          pinkText:"#E677AA"
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        flavors: ["Flavors", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],

      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
