/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */
/** @type {TailwindConfig} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { max: '639px' },
      ...defaultTheme.screens,
    },
    fontFamily: {
      limelight: ['Limelight', 'cursive'],
      mont: ['Montserrat', 'Arial', 'sans-serif'],
    },
    colors: {
      green: '#38c172',
      red: '#e3342f',
      teal: '#4dc0b5',
      grey: '#9babb4',
      white: '#FFFFFF',
      gray: '#E8E8E8'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
