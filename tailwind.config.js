/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },
        openBox: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        lidOpen: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-110deg)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fall: 'fall linear infinite',
        openBox: 'openBox 0.5s ease-out forwards',
        lidOpen: 'lidOpen 0.5s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
