// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ds217.dev',

  integrations: [
    sitemap({
      serialize(item) {
        if (item.url === 'https://ds217.dev/') {
          item.priority = 1;
        }
        return item;
      },
    }),
  ],
});
