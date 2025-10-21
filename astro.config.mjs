// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
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
            id: 'getting-started',
            label: 'Getting Started',
            link: 'getting-started',
            icon: 'heart',
            items: [
              {
                label: 'Project Information',
                items: [
                  "getting-started/contribute",
                  "getting-started/discord",
                  {
                    slug: "getting-started/jar-api",
                    badge: { text: 'FREE', variant: 'success' },
                  },
                  "getting-started/license",
                ],
              },
            ],
          },
          {
            id: 'deploy',
            label: 'Deploy',
            link: 'deploy',
            icon: 'open-book',
            items: [
              { label: 'Considerations', autogenerate: { directory: 'deploy/considerations' } },
              { label: 'Self Hosted', autogenerate: { directory: 'deploy/create' } },
              { label: 'Shared Hosting', autogenerate: { directory: 'deploy/hosted' } },
            ],
          },
          {
            id: 'customise',
            label: 'Customise',
            link: 'customise',
            icon: 'puzzle',
            items: [
              {
                label: 'Plugins',
                items: ['customise/plugins/criteria', { label: 'Popular Plugins', autogenerate: { directory: 'customise/plugins' } }],
              },
              { label: 'Mods', autogenerate: { directory: 'customise/mods' } },
            ],
          },
          {
            id: 'administration',
            label: 'Administration',
            link: 'administration',
            icon: 'setting',
            items: [
              { label: 'Administration Basics', autogenerate: { directory: 'administration' }, collapsed: true },
            ],
          },
          {
            id: 'performance',
            label: 'Performance',
            link: 'performance',
            icon: 'rocket',
            items: [
              { label: 'Basics', autogenerate: { directory: 'performance/basics' } },
              { label: 'Advanced', autogenerate: { directory: 'performance/advanced' } },
            ],
          },
          {
            id: 'troubleshooting',
            label: 'Troubleshooting',
            link: 'troubleshooting',
            icon: 'error',
            items: [
              { label: 'Technical Issues', autogenerate: { directory: 'troubleshooting/compute' } },
              { label: 'Network Issues', autogenerate: { directory: 'troubleshooting/network' } },
            ],
          },
          {
            id: 'extras',
            label: 'Extras',
            link: 'extras',
            icon: 'star',
            items: [
              { label: 'Additional Content', autogenerate: { directory: 'extras' }, collapsed: true },
            ],
          },
        ])
      ],
      components: {
        Sidebar: './src/components/Sidebar.astro',
      },
      title: "setup.md",
      customCss: [
        './src/styles/custom.css',
        './src/fonts/font-face.css',
      ],
      logo: {
        replacesTitle: true,
        light: "./src/assets/logo_dark-2.svg",
        dark: "./src/assets/logo_light-2.svg",
      },
      editLink: {
        baseUrl: "https://github.com/setupmd/docs/edit/v3",
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/setupmd' },
        { icon: 'discord', label: 'Discord', href: 'http://www.setup.md/discord-invite' },
      ],
    }),
    sitemap(),
  ],
});