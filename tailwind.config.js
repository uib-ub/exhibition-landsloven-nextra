/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.tsx',
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        antiqua: ['var(--font-antiqua)'],
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        'll-blue': {
          DEFAULT: '#133f6d',
          '50': '#f1f7fe',
          '100': '#e2eefc',
          '200': '#beddf9',
          '300': '#85c0f4',
          '400': '#44a0ec',
          '500': '#1c85db',
          '600': '#0e67bb',
          '700': '#0d5297',
          '800': '#0f477d',
          '900': '#133f6d',
          '950': '#0c2645',
        },
        'll-gold': {
          DEFAULT: "#c0a469",
          '50': '#f8f6ee',
          '100': '#ede8d4',
          '200': '#ddd1ab',
          '300': '#c9b37b',
          '400': '#c0a469',
          '500': '#a98649',
          '600': '#916c3d',
          '700': '#755233',
          '800': '#634530',
          '900': '#563b2d',
          '950': '#311f17',
        },
        'll-red': {
          DEFAULT: '#b60b29',
          '50': '#fff0f1',
          '100': '#ffe3e3',
          '200': '#ffcbce',
          '300': '#ffa1a7',
          '400': '#ff6c77',
          '500': '#fa394d',
          '600': '#e81636',
          '700': '#b60b29',
          '800': '#a40d2d',
          '900': '#8c0f2c',
          '950': '#4f0213',
        },
        'll-maroon': {
          DEFAULT: '#481217',
          '50': '#fdf3f4',
          '100': '#fbe5e7',
          '200': '#f9cfd3',
          '300': '#f3aeb4',
          '400': '#eb7e88',
          '500': '#de5562',
          '600': '#ca3846',
          '700': '#aa2b37',
          '800': '#8d2730',
          '900': '#75272e',
          '950': '#481217',
        },
      }
    },
  },
  plugins: []
}