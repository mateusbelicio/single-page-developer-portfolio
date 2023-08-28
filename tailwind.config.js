/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
        xl: '0rem',
      },
    },
    extend: {
      colors: {
        primary: '#4ce19e',
        accent: '#ff6f5c',
        neutral: {
          100: '#ffffff',
          200: '#d9d9d9',
          300: '#808080',
          400: '#404040',
          500: '#242424',
          600: '#141414',
        },
      },
      backgroundImage: {
        patternRings: "url('/pattern-rings.svg')",
        patternCircle: "url('/pattern-circle.svg')",
      },
      fontFamily: {
        sans: "'Space Grotesk', sans-serif",
      },
      maxWidth: {
        container: '69.375rem',
      },
    },
  },
  plugins: [],
};
