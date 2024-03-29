/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#c542f5',
          200: '#9e35c4',
          300: '#6d2487',
          400: '#331040'
        }
      },
      backgroundImage: {
        'hotel-cover': "url('./src/img/capa-hotel-1.png')"
      }
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
}