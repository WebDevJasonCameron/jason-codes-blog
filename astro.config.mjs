import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [icon(), sitemap(), react()]
});