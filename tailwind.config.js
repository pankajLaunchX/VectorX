/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
// import defaultTheme  from 'tailwindcss/defaultTheme'

// const colors = require("tailwindcss/colors");
import {  flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      colors : {
        primaryOrange : '#fd7e14',
        primaryBlue : '#082470',
        secondaryOrange : '#fa9441',
        secondaryBlue : '#234cba',
        primaryGray : '#e2e2e2'
      },
      fontFamily : {
        roboto :  ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
