import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
  output: 'static',
  site: 'https://dedonatopsicologa.com',
  integrations: [
    tailwind(),
    preact(),
  ],
});
