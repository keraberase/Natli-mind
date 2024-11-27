import { defineConfig } from 'vite';
import * as glob from 'glob'; // Используйте 'globby', если хотите более современный вариант.
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: glob.sync('./src/**/*.html'), // Указываем все HTML файлы
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
  ],
});
