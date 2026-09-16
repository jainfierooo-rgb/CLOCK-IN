import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvasWhite: '#FFFFFF',
        canvasCream: '#FAF8F5',
        canvasCreamCard: '#F5F2EC',
        canvasCreamBorder: '#E7E2D8',
        textBlack: '#0A0A0A',
        textGraphite: '#262626',
        textMuted: '#666666',
        accentTeal: '#0D9488',
        accentTealHover: '#0F766E',
        accentTealLight: '#CCFBF1',
        borderLight: '#E5E0D8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
