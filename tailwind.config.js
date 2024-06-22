/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      fontFamily: {
        'seogue-ui': ['Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': '0px 21px 39px -33px rgba(10 ,5,5,1);',
        'custom': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
        'eachproduct': 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      }
    },
  },
  plugins: [],
}

// box-shadow: ;