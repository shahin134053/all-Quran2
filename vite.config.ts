import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: false,
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react', 'framer-motion', 'firebase/firestore', 'firebase/app'],
      },
      plugins: [
        tailwindcss(),
        react(),
        VitePWA({
          registerType: 'prompt',
          devOptions: {
            enabled: false,
          },
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
          manifest: {
            name: 'আল- শাহিন ( Shahin) Quran',
            short_name: 'আল-শাহিন',
            description: 'A premium, modern Islamic Quran app featuring multilingual support, audio recitation, and a clean reading experience.',
            theme_color: '#10b981',
            background_color: '#ffffff',
            display: 'standalone',
            icons: [
              {
                src: 'icon.svg',
                sizes: '192x192 512x512',
                type: 'image/svg+xml'
              },
              {
                src: 'icon.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 2000,
        emptyOutDir: true,
        sourcemap: false
      }
    };
});
