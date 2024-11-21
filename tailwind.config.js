/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif']
      },
      fontSize: {
        '3xl-cm': '3.125rem', 
      },
    },
  },
  plugins: [],
}

