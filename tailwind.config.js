/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    // s,m,l
    // tablet (md)
    // Laptop 1024 (lg)
    // Laptop 1440
    // Large screen 4k 2560
    screens: {
      'sm': '250px',
      'm': '300px',
      'l': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '4k': '2560px',
    },
    extend: {
      
  }
  },
  plugins: [],
}

