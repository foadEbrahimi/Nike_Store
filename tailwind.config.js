/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: 'rgb(255 100 82)',
        SubTitle: 'rgb(109 109 109)',
      },
    },
  },
  daisyui: {
    themes: ['cupcake'],
  },
  plugins: [require('daisyui')],
};
