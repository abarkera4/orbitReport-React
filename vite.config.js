import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/orbitReport-React/",
  build: {
    outDir: "build", // Ensuring build output is in the "build" directory
  },
  test: {
    include: ["**/*.test.jsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.js",
  },
});
