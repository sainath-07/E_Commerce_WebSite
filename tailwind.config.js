/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe-ui': ['"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': '0px 21px 39px -33px rgba(10 ,5,5,1);',
      }
    },
  },
  plugins: [],
}