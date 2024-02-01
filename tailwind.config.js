/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghgreen': '#0aa593',
        'ghgrey': '#707070',
      },
      width: {
        'big': '700px',
      }
    },
  },
  plugins: [],
}