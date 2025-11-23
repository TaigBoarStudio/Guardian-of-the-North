import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: base: './' делает все пути относительными.
  // Это позволяет сайту работать в любой папке (например, https://user.github.io/repo-name/)
  // без этой настройки сайт на GitHub Pages может открыться белым экраном.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});