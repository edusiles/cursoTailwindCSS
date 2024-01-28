/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
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
      }
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
}