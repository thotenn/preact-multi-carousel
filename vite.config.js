import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  server: {
    port: 3000,
  },
  esbuild: {
    jsxInject: `import { h } from 'preact'`,
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'preact-vendor': ['preact'],
          'carousel': ['react-multi-carousel']
        }
      }
    }
  }
});