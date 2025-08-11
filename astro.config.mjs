import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://craftbyt.es',
  build: {
    assets: '_astro'
  },
  integrations: [tailwind()]
});