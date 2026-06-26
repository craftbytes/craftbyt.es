import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://craftbyt.es',

  build: {
    assets: '_astro'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});