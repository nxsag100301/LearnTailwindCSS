/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'serif']
      },
      colors: {
        "light-coffe": "#C89F94"
      }
    },
  },
  plugins: [],
}

