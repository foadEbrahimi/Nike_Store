/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: 'rgb(255 100 82)',
        SubTitle: 'rgb(109 109 109)',
        bgcustomer: '#F5F6FF',
      },
      fontFamily: {
        ArialRounded: ['Arial Rounded MT'],
        Montserrat: ['Montserrat'],
        PalanquinThin: ['Palanquin-thin'],
        PalanquinBold: ['Palanquin-bold'],
        PalanquinRegular: ['Palanquin-regular'],
        PalanquinMedium: ['Palanquin-medium'],
      },
    },
  },
  daisyui: {
    themes: ['cupcake'],
  },
  plugins: [require('daisyui')],
};
