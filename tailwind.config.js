/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors:{
        'brownish-red': '#cc8778',
        'brownish-red-dark':'#b45f4c',
        'brownish-red-light':'#f0c4ba',
        'brownish-light':'#e8a798',
        'brownish-red-darker' :'#a6432c'
      }
    },
  },
  plugins: [],
}
