import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      // Externalize the module so it isn’t bundled
      external: ['@gsap/React']
    }
  }
})
