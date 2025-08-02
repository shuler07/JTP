import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/JTP/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        wheel: 'wheel.html',
        roulette: 'roulette.html',
        register: 'register.html'
      }
    }
  }
});