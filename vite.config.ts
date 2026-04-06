import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Code splitting configuration for performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'helmet': ['react-helmet-async'],
          
          // Animation libraries (lazy-loaded bundles)
          'gsap': ['gsap'],
          'three': ['three'],
          'framer': ['framer-motion'],
          
          // UI libraries
          'ui-vendor': ['lucide-react', '@mui/material', '@emotion/react'],
        },
      },
    },
    
    // Optimize chunk size (default is 500KB)
    chunkSizeWarningLimit: 500,
    
    // Enable source maps for production debugging
    sourcemap: false,
  },
  
  // Optimizations for dev server too
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'lucide-react',
      '@tailwindcss/vite',
    ],
  },
});

