import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qzomedicalcollege.github.io',
  base: '/Kyzylorda-medical-college-platform',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
