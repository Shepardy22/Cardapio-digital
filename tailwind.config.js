/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: {
          100: "#EB1308",
          200: "#EE2A20",
        },
      }
    },
  },
  plugins: [],
}