/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Segoe UI','system-ui'],
      },
      boxShadow: {
        'custom-shadow': '0px 21px 39px -33px rgba(10 ,5,5,1);',
        'custom': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
      }
    },
  },
  plugins: [],
}

// box-shadow: ;