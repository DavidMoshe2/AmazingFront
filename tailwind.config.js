/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'like-heart-animation': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '15%': { opacity: '0.9', transform: 'scale(1.2)' },
          '30%': { transform: 'scale(0.95)' },
          '45%': { opacity: '0.9', transform: 'scale(1)' },
          '80%': { opacity: '0.9', transform: 'scale(1)' },
        },
      },
      animation: {
        'like-heart': 'like-heart-animation 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
