/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins', 'sans-serif'],
        "SassyFrass": ['Sassy Frass', 'cursive']
      },
      colors: {
        primary: '#24BAEF'
      }
    },
  },
  plugins: [],
}