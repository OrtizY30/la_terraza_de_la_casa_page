import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'La Terraza De La Casa',
        short_name: 'La Terraza De La Casa',
        description: 'Aplicación del restaurante para realizar pedidos online.',
        theme_color: 'transparent',
        background_color: '#FFFFFF',
        icons: [
          {
            src: 'assets/logocasual.avif',
            sizes: '192x192',
            type: 'image/avif'
          },
          {
            src: 'assets/logocasual.avif',
            sizes: '512x512',
            type: 'image/avif'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajuste del límite de advertencia para el tamaño de los chunks
    minify: "esbuild", // Usa esbuild para minificación rápida y eficiente
    target: "es2020", // Target moderno para mejor rendimiento
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Asegúrate de optimizar estas dependencias cruciales
  },
});
