import { defineNuxtConfig } from "nuxt/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
