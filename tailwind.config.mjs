/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'peb': {
          'bg': '#0a1628',
          'bg2': '#0d1b2a',
          'surface': '#101e33',
          'surface2': '#132340',
          'card': '#0f1a2e',
          'card-hover': '#152240',
          'cyan': '#00D4FF',
          'blue': '#0066FF',
          'green': '#00FFB2',
          'text': '#E6EDF3',
          'text2': '#8B9AB5',
          'muted': '#5A6F8A',
          'border': 'rgba(255,255,255,0.07)',
          'border2': 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        'display': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '28px',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0,255,178,0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 6px rgba(0,255,178,0)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
