import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import path from 'path';
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),  // Плагин для работы с изображениями
    compression({
      algorithm: 'gzip',        // Использование gzip для сжатия
      ext: '.gz',               // Расширение для сжатых файлов
      deleteOriginFile: false,  // Оставить оригинальные файлы
      threshold: 1024,          // Минимальный размер файла для сжатия (1KB)
      filter: /\.(js|css|html)$/i, // Фильтр для файлов (включаем HTML, JS и CSS)
      compressionOptions: { level: 9 } // Максимальный уровень сжатия gzip
    })
  ],
  build: {
    minify: true,  // Включение минификации
  },
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
      '@store': path.resolve(__dirname, './src/store'),
      '@media': path.resolve(__dirname, './src/media'),
      '@UI': path.resolve(__dirname, './src/components/UI'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@Stacks': path.resolve(__dirname, './src/components/layouts/Stacks'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
})
