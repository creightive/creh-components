import type { Config } from 'tailwindcss'

export const crehPreset: Omit<Config, 'content'> = {
  theme: {
    extend: {},
  },
  plugins: [],
}
