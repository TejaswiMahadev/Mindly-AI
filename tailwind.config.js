/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pixel-blue': '#0066FF',
        'pixel-blue-dark': '#0047AB',
        'pixel-blue-light': '#0088FF',
        'pixel-yellow': '#FFD700',
        'pixel-yellow-dark': '#FFA500',
        'pixel-cyan': '#00FFFF',
        'pixel-black': '#000000',
        'pixel-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
