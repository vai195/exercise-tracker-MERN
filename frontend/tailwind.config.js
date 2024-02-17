/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainc: "#1aac83",
        errorc: "#e7195a",
      },
      fontFamily: {
        poppins1: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
