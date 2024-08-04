/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom900: "900px",
        custom400:"400px",
      },
    },
  },
  plugins: [],
};
