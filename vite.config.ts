import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/thai-mts-app/',
  css: {
    preprocessorOptions: {
      scss: {
          additionalData: `@use "@/style/_base.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
