// @ts-check
import { defineConfig } from 'astro/config';
import pdf from 'astro-pdf';

// Check if code is executed at Vercel cloud
const isVercel = !!process.env.VERCEL;

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4000,
  },
  experimental: {
    chromeDevtoolsWorkspace: true,
    contentIntellisense: true,
  },
  // Activate integration only in when Vercel is not used
  integrations: isVercel
    ? []
    : [
        pdf({
          server: {
            port: 4000,
          },
          pages: {
            '/': 'Tomi_Sarjamo_CV.pdf',
          },
          baseOptions: {
            pdf: {
              format: 'A4',
              printBackground: true,
              margin: {
                top: '20mm',
                bottom: '20mm',
                left: '20mm',
                right: '20mm',
              },
            },
          },
        }),
      ],
});
