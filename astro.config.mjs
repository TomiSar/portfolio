// @ts-check
import { defineConfig } from 'astro/config';
import pdf from 'astro-pdf';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4000,
  },
  experimental: {
    chromeDevtoolsWorkspace: true,
    contentIntellisense: true,
  },
  integrations: [
    pdf({
      pages: {
        '/': 'Tomi_Sarjamo_CV.pdf',
      },
      baseOptions: {
        pdf: {
          format: 'A4',
          printBackground: true,
          margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' },
        },
      },
    }),
  ],
});
