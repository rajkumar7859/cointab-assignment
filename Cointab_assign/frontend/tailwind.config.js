/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        backgroundShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        buttonShadow:"rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;"
      }
    },
  },
  plugins: [],
}