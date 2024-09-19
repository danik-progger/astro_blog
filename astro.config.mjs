import { defineConfig } from "astro/config";

import icon from "astro-icon";

import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-blog-cip.netlify.app",
    integrations: [
        icon({
            iconDir: "public/svg",
        }),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        sitemap(),
    ],
});