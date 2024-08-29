import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@media': path.resolve(__dirname, './src/media'),
      '@UI': path.resolve(__dirname, './src/components/UI'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@Stacks': path.resolve(__dirname, './src/components/layouts/Stacks'),
    },
  },
})
