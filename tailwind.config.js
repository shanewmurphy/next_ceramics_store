/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#D5C5AD",
        background: "#e6dcd5",
        gray: "#525252",
        button: "#c98769",
        footer_bkg: "#828b82",
        bg_button: "#f4f1eb",
        text: "#484B5A",
        bgFaq: "#ebe3de",
        Nav: "#60675E",
        green: "#4D5C57",
      },
      screens: {
        sm: "358px",
      },
      width: {
        560: "32rem",
        660: "42rem",
      },
    },
  },
  plugins: [],
};
