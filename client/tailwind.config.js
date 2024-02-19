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
    width: {
      '300px': '300px',
      '364px': '364px',
    },
    height: {
      '211px': '211px',
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/bank-tree.jpeg')",
      },
    },
  },
  plugins: [],
}
