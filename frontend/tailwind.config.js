/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1e1e1e',
        },
        primary: {
          DEFAULT: '#ff2d55',
          glow: 'rgba(255, 45, 85, 0.5)',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 45, 85, 0.4)',
        'glow-lg': '0 0 30px rgba(255, 45, 85, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
