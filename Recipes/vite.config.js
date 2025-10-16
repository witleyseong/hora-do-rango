import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Isso é o passo 1 — adiciona o caminho base do projeto
export default defineConfig({
  plugins: [react()],
  base: '/hora-do-rango/', 
})
