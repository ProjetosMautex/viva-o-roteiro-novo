import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Define que o site será renderizado no servidor (Vercel)
  output: 'server',
  
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false, // Evita duplicidade de CSS no build
    })
  ],

  adapter: vercel(),
});