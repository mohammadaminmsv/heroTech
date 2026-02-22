/** @type {import('tailwindcss').Config} */
import rtl from 'tailwindcss-rtl'
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        htred: '#E20054',
      },
     fontFamily: {
        sans: ['Vazir', 'sans-serif'],
      },
    },
  },
  plugins: [rtl],
};
