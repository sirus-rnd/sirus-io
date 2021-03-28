const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#fe553a'
      },
      screens: { xl: { min: '1280px', max: '1537px' }, '2xl': '1538px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
