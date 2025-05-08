/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dbf1dd',
          200: '#bae3be',
          300: '#8ecd94',
          400: '#5eb067',
          500: '#3d9246',
          600: '#2e7537',
          700: '#265e2d',
          800: '#214a27',
          900: '#1d3e23',
          950: '#0f2113',
        },
        secondary: {
          50: '#f0f7fe',
          100: '#dfeefe',
          200: '#c6e0fd',
          300: '#a0cbfb',
          400: '#74adf7',
          500: '#4f8df2',
          600: '#366fe6',
          700: '#2758d2',
          800: '#2548ab',
          900: '#213f86',
          950: '#182752',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'slide-left': 'slideLeft 25s linear infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};