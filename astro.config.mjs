import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Omochice-toybox.github.io",
  base: process.env.CI ? "/marp-astro" : "",
  integrations: [tailwind()],
});
