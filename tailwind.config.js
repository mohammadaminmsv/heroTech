/** @type {import('tailwindcss').Config} */
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
        htmain:'#E9EDF5',
        htwhite:"#FFFFFF"
      },
     fontFamily: {
        sans: ["Vazir", "sans-serif"],
      },
    },
  },
};
