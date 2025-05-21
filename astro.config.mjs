// @ts-check
import {defineConfig} from 'astro/config';

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
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    site: 'https://ip.lepepe.dev',
    server: {
        port: 3000,
        host: true
    },
    vite: {
        ssr: {
            noExternal: ['path-to-regexp'],
        },
        preview: {
            port: 3000,
            host: true
        }
    }
});
