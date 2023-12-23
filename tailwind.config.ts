import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors:{
        "blue":"var(--primary-color)",
        "green":"var(--secondary-color)",
        "red":"var(--third-color)",
        "blue-light":"var(--forth-color)",
        "dark-gray":"var(--text-title)",
        "gray":"var(--text-body)",
        "shape":"var(--shape)"

      },
    },
  },
  plugins: [],
}
export default config
