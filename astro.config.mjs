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
            label: 'Home',
            icon: 'starlight',
            link: '/',
          },
          {
            label: 'Project',
            link: 'contribute',
            icon: 'heart',
            items: [
              { label: 'Project Information', autogenerate: { directory: 'project' } },
            ],
          },
          {
            label: 'Deploy',
            link: 'deploy/considerations',
            icon: 'open-book',
            items: [
              { label: 'Considerations', autogenerate: { directory: 'deploy/considerations' } },
              { label: 'Self Hosted', autogenerate: { directory: 'deploy/create' } },
              { label: 'Shared Hosting', autogenerate: { directory: 'deploy/hosted' } },
            ],
          },
          {
            label: 'Customise',
            link: 'customise/temp',
            icon: 'puzzle',
            items: [
              {
                label: 'Breakdown',
                items: ['customise/temp'],
              },
              { label: 'Plugins', autogenerate: { directory: 'customise/plugins' } },
              { label: 'Mods', autogenerate: { directory: 'customise/mods' } },
            ],
          },
          {
            label: 'Administration',
            link: 'administer/temp',
            icon: 'setting',
            items: [
              { label: 'Administration Basics', autogenerate: { directory: 'administer' } },
            ],
          },
          {
            label: 'Optimisation',
            link: 'optimise/basics/temp',
            icon: 'rocket',
            items: [
              { label: 'Basics', autogenerate: { directory: 'optimise/basics' } },
              { label: 'Advanced', autogenerate: { directory: 'optimise/advanced' } },
            ],
          },
          {
            label: 'Troubleshoot',
            link: 'fix/connectivity',
            icon: 'error',
            items: [
              { label: 'Technical Issues', autogenerate: { directory: 'troubleshoot/compute' } },
              { label: 'Network Issues', autogenerate: { directory: 'troubleshoot/network' } },
            ],
          },
          {
            label: 'Extras',
            link: 'extra/temp',
            icon: 'star',
            items: [
              { label: 'Additional Content', autogenerate: { directory: 'extras' } },
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
    vue(),
    sitemap(),
  ],
});