import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-front": "url('assets/bg-card-front.png')",
        "card-back": "url('assets/bg-card-back.png')",
      },
    },
  },
  plugins: [],
}
export default config
