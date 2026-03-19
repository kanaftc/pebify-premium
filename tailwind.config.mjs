/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'peb': {
          // Dark backgrounds (navy from logo deep blue)
          'bg': '#0B1D3A',
          'bg2': '#0E2345',
          'surface': '#F2F6FC',
          'surface2': '#E8EFF8',
          // Cards
          'card': '#122850',
          'card-light': '#FFFFFF',
          'card-hover': '#163060',
          'card-light-hover': '#F5F8FD',
          // Logo colors
          'blue-deep': '#003DA6',
          'blue': '#0055CC',
          'cyan': '#00B8D4',
          'cyan-light': '#4DD9F0',
          'green': '#2ECC71',
          'green-light': '#7BE495',
          // Text
          'text': '#E8EFF8',
          'text-dark': '#1A2744',
          'text2': '#8AA0C0',
          'text2-dark': '#5A6F8A',
          'muted': '#6480A0',
          // Borders
          'border': 'rgba(255,255,255,0.08)',
          'border2': 'rgba(255,255,255,0.14)',
          'border-light': 'rgba(11,29,58,0.08)',
          'border-light2': 'rgba(11,29,58,0.14)',
        },
      },
      fontFamily: {
        'display': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: { 'xl': '20px', '2xl': '28px' },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0,184,212,0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 6px rgba(0,184,212,0)' },
        },
        'fade-in': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'slide-up': { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
