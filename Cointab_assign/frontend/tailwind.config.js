/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        backgroundShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        buttonShadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
      }
    },
  },
  plugins: [],
}