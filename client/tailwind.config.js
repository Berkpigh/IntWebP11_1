/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      grey: {
        DEFAULT: '#2c3e50',
      },
    },
    extend: {},
  },
  plugins: [],
}
