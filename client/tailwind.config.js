/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '2em': '2em',
      '2.5rem': '2.5rem',
      '1.1rem': '1.1rem',
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
      '220px': '220px',
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
        submit: '#00bc77',
      },
      grey: {
        ccc: '#ccc',
      },
    },
    backgroundColor: {
      dark: '#12002b',
      submit: '#00bc77',
      fff: '#fff',
    },
    padding: {
      '5px': '5px',
      left: {
        '500px': '500px',
      },
    },
    flex: {
      zero: '0',
      un: '1',
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/bank-tree.jpeg')",
      },
    },
  },
  plugins: [],
}
