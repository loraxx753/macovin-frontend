/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ink: 'hsl(var(--ink) / <alpha-value>)',
        mist: 'hsl(var(--mist) / <alpha-value>)',
        paper: 'hsl(var(--paper) / <alpha-value>)',
        path: 'hsl(var(--path) / <alpha-value>)',
        ridge: 'hsl(var(--ridge) / <alpha-value>)',
        soft: 'hsl(var(--soft) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'haze': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-up-delay': 'fade-up 0.8s ease-out 0.15s both',
        'fade-up-late': 'fade-up 0.9s ease-out 0.3s both',
        drift: 'drift 8s ease-in-out infinite',
        haze: 'haze 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
