// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4000,
  },
  experimental: {
    chromeDevtoolsWorkspace: true,
    contentIntellisense: true,
  },
});
