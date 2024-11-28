import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    base: '/Natli-mind/',
    publicDir: 'src/images',
    build: {
      sourcemap: true,
      outDir: '../dist', 
      assetsDir: 'assets', 
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
    ],
  };
});
