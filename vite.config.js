import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // 👉 change this to your desired port
    strictPort: true, // optional: forces Vite to use this port only
  },
})
