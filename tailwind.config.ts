import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D4B4FF',
          200: '#BB87F8',
          300: '#A361EB',
          400: '#8A43D9',
          500: '#722AC2',
          600: '#611BB0',
          700: '#510F9B',
          800: '#410582',
          900: '#310067',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
