import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/joshua-liens-actants/',  // Correction du nom du repo
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['tweakpane', 'd3']
        }
      }
    }
  }
}) 