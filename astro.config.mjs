import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/pallavi-portfolio',
  integrations: [react()],
});