import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/Eblishcoursefigma/',
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  css: {
    postcss: './postcss.config.js', // Убедитесь, что файл существует
  },
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  
  preview: {
    port: 4173,
    host: true,
  },
})
