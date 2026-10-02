import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3001 },
  preview: { port: 3001 },
  // El servidor de producción sirve la carpeta build/ (herencia de CRA)
  build: { outDir: 'build' },
});
