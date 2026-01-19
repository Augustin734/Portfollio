// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: './',
//   server: {
//     host: true,
//     port: 5173,
//   },
//   build: {
//     outDir: 'dist'
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfollio/', // IMPORTANT pour GitHub Pages
  build: {
    outDir: 'dist',      // dossier de build
  },
})

