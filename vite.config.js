import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
