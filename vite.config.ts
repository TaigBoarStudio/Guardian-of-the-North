import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // ВАЖНО: base: './' делает все пути относительными.
    // Это позволяет сайту работать в любой папке (например, https://user.github.io/repo-name/)
    // без этой настройки сайт на GitHub Pages может открыться белым экраном.
    base: './',
    define: {
      // Prevents "Uncaught ReferenceError: process is not defined" in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    }
  };
});