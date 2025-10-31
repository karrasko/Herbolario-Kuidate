import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Herbolario-Kuidate/', // Cambia esto al nombre de tu repositorio en GitHub
})
