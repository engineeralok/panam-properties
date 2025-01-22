import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/panam-properties/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
