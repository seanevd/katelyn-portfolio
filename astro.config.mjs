import { defineConfig } from 'astro/config';
// xxx
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'http://katelynduncan.com',
  integrations: [react()]
});