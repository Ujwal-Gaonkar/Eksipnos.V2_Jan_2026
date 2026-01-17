import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  optimizeDeps: {
    // Exclude the tooltip from pre-bundling so the alias can intercept it
    exclude: ["@radix-ui/react-tooltip"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force a single React instance (fixes "Cannot read properties of null (reading 'useRef')")
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "react/jsx-runtime": path.resolve(__dirname, "./node_modules/react/jsx-runtime"),
      "react/jsx-dev-runtime": path.resolve(__dirname, "./node_modules/react/jsx-dev-runtime"),
      // Safety shim to prevent Radix Tooltip runtime crashes in some cached/duplicate-react environments
      "@radix-ui/react-tooltip": path.resolve(__dirname, "./src/shims/radix-tooltip.tsx"),
    },
    dedupe: ["react", "react-dom"],
  },
}));
