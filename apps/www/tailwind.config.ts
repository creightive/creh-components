import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { crehPreset } from '@acme/tailwind-preset'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [crehPreset],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
