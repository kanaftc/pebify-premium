/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'peb': {
          'bg': '#0F1419',
          'bg2': '#161C22',
          'surface': '#F5F7FA',
          'surface2': '#EDF0F5',
          'card': '#1A2028',
          'card-light': '#FFFFFF',
          'card-hover': '#222A34',
          'card-light-hover': '#F5F7FA',
          'blue-deep': '#003DA6',
          'blue': '#0055CC',
          'cyan': '#00B8D4',
          'cyan-light': '#4DD9F0',
          'green': '#2ECC71',
          'green-light': '#7BE495',
          'text': '#E2E8F0',
          'text-dark': '#1E293B',
          'text2': '#94A3B8',
          'text2-dark': '#64748B',
          'muted': '#64748B',
          'border': 'rgba(255,255,255,0.06)',
          'border2': 'rgba(255,255,255,0.12)',
          'border-light': 'rgba(15,20,25,0.06)',
          'border-light2': 'rgba(15,20,25,0.12)',
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
