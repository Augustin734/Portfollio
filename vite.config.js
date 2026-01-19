import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfollio/', // IMPORTANT pour GitHub Pages
  build: {
    outDir: 'dist',
  },
})
