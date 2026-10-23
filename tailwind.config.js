/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F6A305',
          amber: '#F6A305',
          primary: '#F6A305',
          purple: '#F6A305',
          dark: '#000000',
          card: '#0e0e0e',
          border: 'rgba(255, 255, 255, 0.1)',
          violet: '#e09404',
          neon: '#F6A305'
        },
        purple: {
          400: '#ffb82e',
          500: '#F6A305',
          600: '#e09404',
          700: '#b87702',
          800: '#8c5901',
          900: '#5c3a00',
          950: '#382200'
        },
        violet: {
          400: '#ffb82e',
          500: '#F6A305',
          600: '#e09404',
          700: '#b87702',
          800: '#8c5901',
          900: '#5c3a00'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        secondary: ['"DM Serif Text Italic"', 'serif']
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
