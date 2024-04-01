import { join } from 'path';

import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [require('../../tailwind.preset')],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
