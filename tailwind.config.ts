import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#1597E4', // default
          200: '#3581c6d9', // hover
          300: '#e9f5fed9',
          400: ''
        },
        dark: {
          100: '#212121',
          200: '#182021',
          300: '#212427'
        },
        error: '#D86161',
        platinum: '#E6E6E6',
        lotion: '#FAFAFA',
        silver: '#7A7A7A',
        lightSilver: '#D8D8D8',
        gainsboro: '#DFDBDA',
      },
    },
  },
  plugins: [],
}
export default config
