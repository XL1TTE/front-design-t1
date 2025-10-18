import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/front-design-t1/',
  build: {
    emptyOutDir: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        Index: resolve(fileURLToPath(new URL('.', import.meta.url)), 'Index.html'),
        Home: resolve(fileURLToPath(new URL('.', import.meta.url)), 'Home.html'),
      },
    },
  },
  server: {
    open: './Home',
  },
});
