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
    },
    darkMode: "class",
    extend: {
      colors: {
        light: {
          Background: "#FFFFFF",
          Text: "#000000"
        },
        dark: {
          Background: "#06091A",
          Text: "#FFFFFF"
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
