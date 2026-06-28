import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react-tiny-mask/',
  root: 'demo',
  resolve: {
    alias: {
      'react-tiny-mask': resolve(__dirname, 'src/index.ts'),
    },
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
