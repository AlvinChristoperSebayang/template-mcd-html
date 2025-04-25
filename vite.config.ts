import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "src/html/about.html",
        properties: "src/html/properties.html",
        resources: "src/html/properties.html",
        services: "src/html/services.html",
        contanct: "src/html/contact.html",
      },
    },
  },

  plugins: [tailwindcss()],
});
