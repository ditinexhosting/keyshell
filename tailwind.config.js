/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F61E1E',
        secondary: '#1C1C1C',
        'gray-white': '#5F5F5F',
        'light-border': '#C4C4C4',
      },
    },
  },
  plugins: [],
};
