/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        primary: '#00F5FF',
        purple: '#7C3AED',
        pink: '#FF2E63',
        blue: '#3B82F6',
        white: '#FFFFFF',
        gray: '#94A3B8',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)',
        'aurora': 'linear-gradient(45deg, rgba(124, 58, 237, 0.2), rgba(0, 245, 255, 0.2), rgba(255, 46, 99, 0.2))',
      },
      backgroundSize: {
        'cyber-grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
