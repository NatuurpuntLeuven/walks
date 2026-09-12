import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://natuurpuntleuven.github.io",
  base: "/walks",
  output: "static",
  trailingSlash: "always",
  build: {
    assets: "assets"
  }
});
