/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#9f7c2d',
          light: '#f8e07d'
        },
        navy: {
          DEFAULT: '#091f5b',
          light: '#6f96d1'
        },
        silver: {
          DEFAULT: '#d8d3cf'
        }
      }
    },
  },
  plugins: [],
};