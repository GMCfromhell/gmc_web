import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gmc.dev.br',
  output: 'static',
  build: {
    format: 'preserve',
  },
  integrations: [
    sitemap({
      serialize(item) {
        item.url = item.url.replace(/\/(terms|privacy)$/, '/$1.html');
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
