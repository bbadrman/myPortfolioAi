/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#5DE0E6',
        dark: '#0B1021',
        accent: '#A16EFF'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 10px 60px rgba(93,224,230,0.3)',
      }
    },
  },
  plugins: [],
};
