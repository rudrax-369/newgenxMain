/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          purple: '#b026ff',
          blue: '#144cfa',
          cyan: '#00f0ff',
          solar: '#ff4500',
          gold: '#ffcc00',
        },
        background: '#040406',
        surface: 'rgba(255, 255, 255, 0.03)',
      },
      fontSize: {
        xs: ['0.85rem', { lineHeight: '1.35rem' }],
        sm: ['1rem', { lineHeight: '1.5rem' }],
        base: ['1.15rem', { lineHeight: '1.75rem' }],
        lg: ['1.3rem', { lineHeight: '1.85rem' }],
        xl: ['1.45rem', { lineHeight: '2rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.15rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.6rem', { lineHeight: '3rem' }],
        '5xl': ['3.5rem', { lineHeight: '1' }],
        '6xl': ['4.35rem', { lineHeight: '1' }],
        '7xl': ['5.25rem', { lineHeight: '1' }],
        '8xl': ['7rem', { lineHeight: '1' }],
        '9xl': ['9.25rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
