import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        contanct: "src/html/contact.html",
        properties: "src/html/properties.html",
        resources: "src/html/Resources.html",
        services: "src/html/services.html",
        about: "src/html/about.html",
        
      },
    },
  },

  plugins: [tailwindcss()],
});
