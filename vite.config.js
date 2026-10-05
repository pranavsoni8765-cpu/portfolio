import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets work cleanly on both Vercel and GitHub Pages
  server: {
    port: 3000,
    open: false,
  },
});
