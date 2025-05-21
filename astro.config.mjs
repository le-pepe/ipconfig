// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

import icon from 'astro-icon';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
      tailwind(),
      icon(),
      partytown({
        config: {
          forward: ["dataLayer.push"]
        }
      })
  ],
  server: {
    port:3000,
    host: true
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
