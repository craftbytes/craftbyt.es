import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://craftbyt.es',
  build: {
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});