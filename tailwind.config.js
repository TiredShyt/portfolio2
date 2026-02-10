/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#D83B7D',
        'brand-dark': '#8B1A4F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          pink: 'var(--brand-pink)',
          dark: 'var(--brand-dark)',
        },
      },
    },
  },
}