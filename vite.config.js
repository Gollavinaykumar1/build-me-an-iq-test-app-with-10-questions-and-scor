import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/build-me-an-iq-test-app-with-10-questions-and-scor/",
  build: { outDir: "dist", assetsDir: "assets" },
  server: { port: 3000 },
});
