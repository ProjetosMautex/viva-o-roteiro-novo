import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // Certifique-se de que essa linha existe

export default defineConfig({
  integrations: [
    react(), 
    tailwind() // E que ele está aqui dentro
  ],
});