/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Nunito Sans", "sans"'],
        'secondary': ["'Playfair Display', 'sans'"]
      },
      colors: {
        'primary': '#1d1bf9',
        'secondary': '#f0f0f3'
      }
    },
  },
  plugins: [],
}
