import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27', // Green button color
          hover: '#234420',
        },
        secondary: {
          DEFAULT: '#FFB6C1', // Pink background
          light: '#FFC8D0',
        },
        frog: {
          body: '#90BE6D', // Main frog color
          dark: '#37570F', // Darker details
        },
        text: {
          primary: '#4A4A4A',
          secondary: '#6B7280',
          accent: '#9A6B76', // Brownish text color from "Sign in"
        },
        social: {
          google: '#EA4335',
          facebook: '#1877F2',
          github: '#24292E',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}