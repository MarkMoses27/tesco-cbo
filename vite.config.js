import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('lodash')) return 'lodash-vendor';
            return 'vendor'; // Other dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
    brotliSize: true, // Enable Brotli compression
  },
});
