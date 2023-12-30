import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/client'
  },
  plugins: [react(), eslint()],
})
