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
        222: '#222',
        fff: '#fff',
      },
    },
    width: {
      '100px': '100px',
      '300px': '300px',
      '364px': '364px',
    },
    height: {
      '211px': '211px',
    },
    borderWidth: {
      10: '10px',
    },
    borderColor: {
      green: {
        feature: '#00bc77',
      },
      grey: {
        ccc: '#ccc',
      },
    },
    backgroundColor: {
      dark: '#12002b',
      submit: '#00bc77',
    },
    padding: {
      '5px': '5px',
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/bank-tree.jpeg')",
      },
    },
  },
  plugins: [],
}
