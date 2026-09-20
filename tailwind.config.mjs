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
        ember: 'hsl(var(--ember) / <alpha-value>)',
        dusk: 'hsl(var(--dusk) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ken-slow': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.75s ease-out both',
        'fade-up-delay': 'fade-up 0.85s ease-out 0.12s both',
        'fade-up-late': 'fade-up 0.95s ease-out 0.24s both',
        'ken-slow': 'ken-slow 18s ease-out forwards',
      },
    },
  },
  plugins: [],
};
