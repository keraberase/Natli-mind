import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  root: 'src', 
  base: '/Natli-mind/', 
  publicDir: 'src/images', 
  build: {
    sourcemap: true,
    outDir: '../dist', 
    emptyOutDir: true,
    assetsDir: 'assets', 
    rollupOptions: {
      input: glob.sync('./src/*.html'), 
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
});
