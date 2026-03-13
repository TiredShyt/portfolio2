import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Since I see this in your deps

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/', // <--- Add this line!
})