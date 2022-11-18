/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "BebasNeue": ["Bebas Neue"],
      }
    },

    screens: {
      'sx': '320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1200px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1536px) { ... }
    }
    ,
    container: {
      
    },
  },
  plugins: [],
}
