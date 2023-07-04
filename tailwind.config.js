/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(206, 94%, 87%)',
          200: 'hsl(228, 100%, 84%)',
          300: 'hsl(243, 100%, 62%)',
          400: 'hsl(213, 96%, 18%)'
        },
        error: 'hsl(354, 84%, 57%)',
        secondary: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(231, 100%, 99%)',
          300: 'hsl(217, 100%, 97%)',
          400: 'hsl(229, 24%, 87%)',
          500: 'hsl(231, 11%, 63%)',
        }
      },
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
      }
    },
  },
  plugins: [],
}

