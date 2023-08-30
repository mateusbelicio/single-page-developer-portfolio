/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.875rem',
        xl: '0rem',
      },
    },
    extend: {
      colors: {
        primary: '#4ee1a0',
        accent: '#ff6f5c',
        error: '#ff6f5b',
        neutral: {
          50: '#ffffff',
          300: '#d9d9d9',
          800: '#242424',
          900: '#151515',
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
