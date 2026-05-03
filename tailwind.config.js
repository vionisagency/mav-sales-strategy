/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060d1f',
          900: '#0f1629',
          800: '#162035',
          700: '#1e2a45',
          600: '#2a3a5c',
          500: '#3a5080',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          glow: 'rgba(59,130,246,0.15)',
        },
        positive: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
