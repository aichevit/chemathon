/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'chem-dark':   '#050B1A',
        'chem-darker': '#030710',
        'chem-blue':   '#00C2FF',
        'chem-green':  '#00FF87',
        'chem-purple': '#7B5BF2',
        'chem-text':   '#E8F0FF',
        'chem-muted':  '#6B82A8',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        exo:      ['Exo 2', 'sans-serif'],
        mono:     ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        marquee:      'marquee 32s linear infinite',
        float:        'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        scanline:     'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
