// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
  site: "https://www.setup.md",
  trailingSlash: "never",
  vite: {
    plugins: [
      tailwindcss(), // Tailwind 4 is correctly added here
    ],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@content": path.resolve("./src/content"),
        "@assets": path.resolve("./src/assets"),
        "@styles": path.resolve("./src/styles"),
        "@fonts": path.resolve("./src/fonts"),
        "@utils": path.resolve("./src/utils"),
      }
    }
  },
  
  build: {
    format: "file",
  },
  
  integrations: [
    starlight({
      // ✅ CORRECTED: plugins array is inside the starlight config object
      plugins: [
        starlightThemeObsidian({
          backlinks: false,
          graph: false
        }),
      ],
      
      title: "setup.md", // ✅ Correctly placed inside the starlight config object
      customCss: [
        './src/styles/custom.css',
        './src/fonts/font-face.css',
      ],
      logo: {
        replacesTitle: true,
        light: "./src/assets/logo-dark.png",
        dark: "./src/assets/logo-light.png",
      },
      editLink: {
        baseUrl: "https://github.com/setupmd/docs/edit/v3",
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/setupmd' },
        { icon: 'discord', label: 'Discord', href: 'http://www.setup.md/discord-invite' },
      ],
      sidebar: [
        {
          label: "Project Information",
          autogenerate: {
            directory: "/information/",
          },
          collapsed: false,
        },
        {
          label: "Enhancements",
          autogenerate: {
            directory: "/enhancements/",
          },
          collapsed: true,
        },
        {
          label: "Hosting Tips",
          autogenerate: {
            directory: "/hosting/",
          },
          collapsed: true,
        },
        {
          label: "Server Tools",
          autogenerate: {
            directory: "/tools/",
          },
          collapsed: true,
        },
        {
          label: "Server Troubleshooting",
          autogenerate: {
            directory: "/troubleshooting/",
          },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "/guides/",
          },
          collapsed: true,
        },
      ],
    }), // ✅ Correctly closing the starlight function call
    vue(),
    sitemap(),
  ], // ✅ Correctly closing the integrations array
});