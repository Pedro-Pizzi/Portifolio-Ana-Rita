import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domínio final do site. Enquanto não estiver definido, o layout omite
  // <link rel="canonical"> e og:url em vez de apontar para um endereço
  // inventado. Defina SITE_URL no build (ex.: SITE_URL=https://seudominio.com.br).
  site: process.env.SITE_URL,
  server: {
    port: 5174,
  },
});
