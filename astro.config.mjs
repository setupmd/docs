// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";
import starlightThemeObsidian from 'starlight-theme-obsidian';
import starlightSidebarTopics from 'starlight-sidebar-topics';

export default defineConfig({
  site: "https://www.setup.md",
  trailingSlash: "never",
  vite: {
    plugins: [
      tailwindcss(),
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
      plugins: [
        starlightThemeObsidian({
          backlinks: false,
          graph: false
        }),
        starlightSidebarTopics([
          {
            label: 'Project Information',
            link: 'about',
            icon: 'rocket',
            items: [
              { label: 'Project Information', autogenerate: { directory: 'project' } },
            ],
          },
        ])
      ],
      components: {
        Sidebar: './src/components/sidebar.astro',
      },
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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/setupmd' },
        { icon: 'discord', label: 'Discord', href: 'http://www.setup.md/discord-invite' },
      ],
    }),
    vue(),
    sitemap(),
  ],
});