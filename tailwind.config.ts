import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'background': '#101630',
        'background-light': '#1a2545',
        'blue': {
          500: '#4E85F0',
          300: '#67c6e3',
        },
        'purple': {
          500: '#6464ED',
        },
      },
      backgroundImage: {
        'gradient-custom': 'var(--gradient-custom)',
      },
    },
  },
  plugins: [],
}

export default config;
