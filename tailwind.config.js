module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 0.5s ease-out forwards',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const animationDelayUtilities = {}
      for (let i = 1; i <= 10; i++) {
        animationDelayUtilities[`.animation-delay-${i * 100}`] = {
          'animation-delay': `${i * 100}ms`,
        }
      }
      addUtilities(animationDelayUtilities, variants('animationDelay'))
    },
  ],
}