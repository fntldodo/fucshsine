import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hub: {
          primary: '#6AE4FF',
          dark: '#0B1224'
        }
      },
      boxShadow: {
        neon: '0 0 20px rgba(106, 228, 255, 0.7)',
        glass: '0 8px 30px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        aurora: 'conic-gradient(from 120deg, rgba(106,228,255,0.3), rgba(184,129,255,0.35), rgba(106,228,255,0.3))'
      }
    }
  },
  plugins: []
};

export default config;
