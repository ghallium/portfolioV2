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
      },
      keyframes: {
        'slide-out-right' : {
          '0%': {
            transform : 'translateX(-25%)',
            opacity: '0'
          },
          '100%' : {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'slide-out-down' : {
          '0%': {
            transform: 'translateY(-25%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
}