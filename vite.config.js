import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  base: "/tarodew",
  build: {
    outDir: "dist/tarodew",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   publicDir: "public",
//   base: "/tarodew",
//   build: {
//     outDir: "./dist/tarodew",
//     // sourcemap: true,
//     emptyOutDir: true,
//     rollupOptions: {
//       output: {
//         entryFileNames: "[name].js",
//         chunkFileNames: "[name].js",
//         assetFileNames: "[name].[ext]",
//       },
//     },
//   },
// });
