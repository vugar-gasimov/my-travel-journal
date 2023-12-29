import fontInter from "tailwindcss-font-inter";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [fontInter()],
};
