import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.setup.md",
  trailingSlash: "never",
  build: {
    format: "file"
  },
  integrations: [starlight({
    title: "setup.md",
    editLink: {
      baseUrl: "https://github.com/setupmd/docs/edit/v3"
    },
    social: {
      discord: "https://link.setup.md/discord",
      github: "https://link.setup.md/repo"
    },
    sidebar: [{
      label: "Project Information",
      autogenerate: {
        directory: "/information/"
      },
      collapsed: false
    }, {
      label: "Enhancements",
      autogenerate: {
        directory: "/enhancements/"
      },
      collapsed: true
    }, {
      label: "Hosting Tips",
      autogenerate: {
        directory: "/hosting/"
      },
      collapsed: true
    }, {
      label: "Server Tools",
      autogenerate: {
        directory: "/tools/"
      },
      collapsed: true
    }, {
      label: "Server Troubleshooting",
      autogenerate: {
        directory: "/troubleshooting/"
      },
      collapsed: true
    }, {
      label: "Guides",
      autogenerate: {
        directory: "/guides/"
      },
      collapsed: true
    }]
  }), vue(), tailwind(), sitemap()]
});