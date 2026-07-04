import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://craftbyt.es',

  build: {
    assets: '_astro'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});