/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayMain': '#434145',
        'blueMain': '#4670ff',
      },
      screens: {
        'mobile': '350px',
        'mobileLg': '550px',
        'tabletsm': '650px',
        'tablet': '900px',
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation:{
        'slider':'slider 10s linear infinite'
      }
    },
  },
  plugins: [],
}