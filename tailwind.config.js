/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Montserrat", "sans"'],
        'secondary': ["'Playfair Display', 'sans'"]
      },
      colors: {
        'primary': '#1AFFD5',
        'secondary': '#99DDC8',
        'pop': '#F18701'
      },
      height: {
        '75v' : '75vh'
      }
    },
  },
  plugins: [],
}
