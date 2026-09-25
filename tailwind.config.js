/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F7F2',
        paper: '#FAFAFA',
        ink: '#222725',
        black: '#151513',
        slate: '#19323C',
        ash: '#4B5A61',
        gray: '#666666',
        fog: '#A1A9AD',
        line: '#E2E1DF',
        linesoft: '#EFEFEC',
        coral: '#EA4F53',
      },
      fontFamily: {
        display: ['Chillax', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
