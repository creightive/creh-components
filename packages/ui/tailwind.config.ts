/* eslint-disable-next-line import/no-extraneous-dependencies -- dev dependency */
import type { Config } from 'tailwindcss'
/* eslint-disable-next-line import/no-extraneous-dependencies -- dev dependency */
import crehPreset from '@acme/tailwind-preset'

const config: Pick<Config, 'prefix' | 'presets' | 'content' | 'darkMode' | 'plugins'> = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  presets: [crehPreset],
  // prefix: 'ui-',
}

export default config
