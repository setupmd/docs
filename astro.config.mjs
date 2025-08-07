import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import starlightThemeObsidian from "starlight-theme-obsidian";
import sitemap from "@astrojs/sitemap";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://www.setup.md",
  trailingSlash: "never",
  vite: {
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
      plugins: [
        starlightThemeObsidian({
          graphConfig: {
            depth: 1,
            depthDirection: "both",
            repelForce: 500,
          },
        }),
      ],
      title: "setup.md",
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
      social: {
        discord: "http://www.setup.md/discord-invite",
        github: "https://github.com/setupmd/docs",
      },
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
    }),
    vue(),
    tailwind(),
    sitemap(),
  ],
});
