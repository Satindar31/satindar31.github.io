import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://satindar31.github.io",
  integrations: [tailwind(), icon()]
});