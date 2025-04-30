import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        properties: "properties.html",
        resources: "properties.html",
        services: "services.html",
        contanct: "contact.html",
      },
    },
  },

  plugins: [tailwindcss()],
});
