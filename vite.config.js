import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    VitePWA({
      includeAssets: [
        'https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/**/*', // Substitua pelo URL real do seu storage
      ],
      manifest: {
        name: 'My App',
        short_name: 'App',
        description: 'My awesome app',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/path/to/icon.png', // Atualize este caminho conforme necessário
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
