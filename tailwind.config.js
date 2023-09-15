/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "yellow-style": "#F4E04D",
        "medium-blue": "#5EB1BF",
        "heavy-blue": "#042A2B",
        "light-blue": "#54F2F2",
      },
    },
  },
  plugins: [],
};
