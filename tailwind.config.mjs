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
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: '1.45' }],
        sm: ['var(--text-sm)', { lineHeight: '1.5' }],
        base: ['var(--text-base)', { lineHeight: '1.65' }],
        lg: ['var(--text-lg)', { lineHeight: '1.6' }],
        xl: ['var(--text-xl)', { lineHeight: '1.45' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.3' }],
        '3xl': ['var(--text-3xl)', { lineHeight: '1.2' }],
        '4xl': ['var(--text-4xl)', { lineHeight: '1.15' }],
        '5xl': ['var(--text-5xl)', { lineHeight: '1.08' }],
        hero: ['var(--text-hero)', { lineHeight: '1.02' }],
      },
      minHeight: {
        tap: '2.75rem',
      },
      minWidth: {
        tap: '2.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ken-slow': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s ease-out both',
        'fade-up-delay': 'fade-up 0.7s ease-out 0.1s both',
        'fade-up-late': 'fade-up 0.75s ease-out 0.2s both',
        'ken-slow': 'ken-slow 22s ease-out forwards',
      },
      transitionDuration: {
        press: '120ms',
      },
    },
  },
  plugins: [],
};
