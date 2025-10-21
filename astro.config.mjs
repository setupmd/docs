// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
            id: "getting-started",
            label: "Getting Started",
            link: "getting-started",
            icon: "heart",
            items: [
              {
                label: "Project Information",
                items: [
                  "getting-started/contribute",
                  "getting-started/discord",
                  {
                    slug: "getting-started/jar-api",
                    badge: { text: "FREE", variant: "success" },
                  },
                  "getting-started/license",
                ],
              },
            ],
          },
          {
            id: "deploy",
            label: "Deploy",
            link: "deploy",
            icon: "open-book",
            items: [
              {
                label: "Considerations",
                items: [
                  "deploy/considerations",
                  "deploy/considerations/hosting-types",
                  "deploy/considerations/operating-systems",
                  "deploy/considerations/panels",
                ],
              },
              {
                label: "Self Hosted",
                items: [
                  "deploy/create/install-java",
                  "deploy/create/download-jars",
                  "deploy/create/startup-scripts",
                ],
              },
              {
                label: "Shared Hosting",
                items: [
                  "deploy/hosted",
                  "deploy/hosted/providers",
                  "deploy/hosted/hardware",
                  "deploy/hosted/purchased-what-next",
                ],
              },
            ],
          },
          {
            id: "customise",
            label: "Customise",
            link: "customise",
            icon: "puzzle",
            items: [
              {
                label: "Plugins",
                items: [
                  "customise/plugins/criteria",
                  {
                    label: "Free",
                    items: [
                      "customise/plugins/free/chestshop",
                      "customise/plugins/free/discordsrv",
                      {
                        slug: "customise/plugins/free/essentialsx",
                        badge: { text: "CORE", variant: "success" },
                      },
                      {
                        slug: "customise/plugins/free/worldedit",
                        badge: { text: "CORE", variant: "success" },
                      },
                      {
                        slug: "customise/plugins/free/worldguard",
                        badge: { text: "CORE", variant: "success" },
                      },
                      {
                        slug: "customise/plugins/free/luckperms",
                        badge: { text: "CORE", variant: "success" },
                      },
                      "customise/plugins/free/minimotd",
                      "customise/plugins/free/playerauctions",
                      "customise/plugins/free/quickshop",
                      {
                        slug: "customise/plugins/free/vault",
                        badge: { text: "CORE", variant: "success" },
                      },
                      "customise/plugins/free/znpcs",
                    ],
                  },
                  {
                    label: "Premium",
                    items: [
                      "customise/plugins/premium/citizens",
                      {
                        slug: "customise/plugins/premium/litebans",
                        badge: { text: "RECOMMENDED", variant: "tip" },
                      },
                      "customise/plugins/premium/zauctionhouse",
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "administration",
            label: "Administration",
            link: "administration",
            icon: "setting",
            items: [
              {
                label: "Server Administration",
                items: [
                  "administration/databases",
                  "administration/offline-mode",
                  "administration/server-software",
                  "administration/sftp",
                  "administration/textures",
                  { 
                    label: "Permissions",
                    items: ["administration/permissions", "administration/permissions/plugins"],
                    badge: { text: "IMPORTANT", variant: "danger" },
                  },
                  { 
                    label: "Security",
                    items: [
                      "administration/security",
                      "administration/security/anticheat",
                      "administration/security/antixray",
                      "administration/security/antiexploit",
                      "administration/security/antilag"
                    ],
                  },
                  {
                    label: "Economy",
                    items: [
                      "administration/economy",
                      "administration/economy/gui",
                      "administration/economy/chest",
                      "administration/economy/shop",
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "performance",
            label: "Performance",
            link: "performance",
            icon: "rocket",
            items: [
              {
                label: "Basics",
                autogenerate: { directory: "performance/basics" }
              },
              {
                label: "Advanced",
                autogenerate: { directory: "performance/advanced" }
              },
            ],
          },
          {
            id: "troubleshooting",
            label: "Troubleshooting",
            link: "troubleshooting",
            icon: "error",
            items: [
              {
                label: "Technical Issues",
                items: [
                  "troubleshooting/compute/java"
                ],
              },
              {
                label: "Network Issues",
                items: [
                  "troubleshooting/network/connectivity",
                  "troubleshooting/network/latency",
                  "troubleshooting/network/nat",
                ],
              },
            ],
          },
          {
            id: "extras",
            label: "Extras",
            link: "extras",
            icon: "star",
            items: [
              {
                label: "Server Administration",
                items: [
                  "extras/advertising",
                  "extras/folia",
                  "extras/oracle",
                  "extras/signed-chat",
                  "extras/tls",
                  "extras/tunnels",
                ],
              },
              { label: "Game Panels", items: [{ label: "Pterodactyl", autogenerate: { directory: "extras/game-panels/pterodactyl" } }, { label: "PufferPanel", autogenerate: { directory: "extras/game-panels/pufferpanel" } }], collapsed: true },
              { label: "Our Lab", items: [{ label: "Core", autogenerate: { directory: "extras/lab/core" } }, { label: "Optional", autogenerate: { directory: "extras/lab/optional" } }], collapsed: true },
            ],
          },
        ])
      ],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
      title: "setup.md",
      customCss: [
        "./src/styles/custom.css",
        "./src/fonts/font-face.css",
      ],
      logo: {
        replacesTitle: true,
        light: "./src/assets/logo_dark-2.svg",
        dark: "./src/assets/logo_light-2.svg",
      },
      editLink: {
        baseUrl: "https://github.com/setupmd/docs/tree/restructure",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/setupmd"
        },
        {
          icon: "discord",
          label: "Discord",
          href: "http://www.setup.md/discord-invite"
        },
      ],
    }),
    sitemap(),
  ],
});