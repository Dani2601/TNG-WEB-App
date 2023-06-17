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
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      laptop4k: "2560px",
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
          pinkText: "#E677AA",
          yellowText: "#F8E71C",
        },
        tfr: {
          yellow: "#E9FF33",
          black: "#00000",
          purple: "#8A02BC",
          pink: "#FF00FC",
        },
        bakebe: {
          pink: "#e8627c",
          orange: "#EDA61D",
          pinkIcon: "#e8627c",
          footerpink: "#feb2af",
          brown: "#d9bb9f",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        flavors: ["Flavors", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mrDafoe: ["Mr Dafoe", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
