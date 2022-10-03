/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: {
          light: '#fcca03',
          DEFAULT: '#FCB200',
          dark: '#fca103',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
