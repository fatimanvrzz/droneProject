/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'noto' : ['"Noto Sans"', 'sans-serif'],
        'oswald':['"Oswald"', 'sans-serif'],
        'garamond':['"EB Garamond", serif'],
      },
      colors: {
        'dark-gray': '#454545',
        'light-gray': '#d4c7c7',
        'metalic': '#7e7e7e',
        'ab': '#ababab',
      }
    },
  },
  plugins: [],
}