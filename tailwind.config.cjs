/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 3s ease-out .8s 1 normal both',
        'bounce-text': 'bounce 1.5s normal 2'
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '2ch' },
          '15%, 20%': { width: '4ch' },
          '25%, 30%': { width: '6ch' },
          '35%, 40%': { width: '8ch' },
          '45%, 50%': { width: '10ch' },
          '55%, 60%': { width: '12ch' },
          '65%, 70%': { width: '14ch' },
          '75%, 80%': { width: '16ch' },
          '85%, 90%': { width: '18ch' },
          '95%': { width: '20ch'}
        },
      }
    },
  },
  plugins: ['Ubuntu', 'Source Sans Pro', 'sans-serif'],
}
