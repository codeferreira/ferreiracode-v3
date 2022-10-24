/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 48,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      purple: {
        100: '#E7D7F0',
        200: '#837A9D',
        400: '#675C87',
        700: '#563373',
        800: '#381B50'
      },
      gray: {
        100: '#F4F4F4',
        300: '#727272'
      }
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
