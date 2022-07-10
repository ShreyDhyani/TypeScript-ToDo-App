/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'color_red' : {
          'fill' : '#ff6666',
          'boundary' : '#660000',
        },
        'color_blue' : {
          'fill': '#03dffc',
          'boundary': '#105761',
        },
        'color_green' : {
          'fill': '#95e077',
          'boundary': '#295e14',
        },
        'color_yellow' : {
          'fill': '#f0df4d',
          'boundary': '#876314',
        },
        'color_indigo' : {
          'fill': '#e872e0',
          'boundary': '#63145e',
        },
        'color_purple' : {
          'fill': '#b861ed',
          'boundary': '#430e63',
        },
      },
    },
  },
  plugins: [],
};
