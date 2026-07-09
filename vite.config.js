import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' → 빌드 산출물이 file://, 서브패스, Vercel 어디서나 동작
export default defineConfig({
  plugins: [react()],
  base: './',
})
