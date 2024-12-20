/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#B6B1A2",
        darkgrey: "#2F2F2F",
        lightblue: "#5A8397",
        lightred: "#A25769",
      },
      fontFamily: {
        primary: ['"Montserrat"', "serif"],
        secondary: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};


