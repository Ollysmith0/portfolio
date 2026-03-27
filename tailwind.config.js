module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#6EE7B7',
        'accent-dark': '#10B981',
        surface: '#0F0F0F',
        'surface-2': '#161616',
        'surface-3': '#1C1C1C',
        border: '#2A2A2A',
        muted: '#6B7280',
        'text-primary': '#F9FAFB',
        'text-secondary': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient-move': 'gradientMove 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
};
