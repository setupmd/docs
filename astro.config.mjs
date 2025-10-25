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
                  "deploy/considerations/server-software",
                ],
              },
              {
                label: "Self Hosted",
                items: [
                  "deploy/create/install-java",
                  "deploy/create/download-jars",
                  "deploy/create/startup-scripts",
                  "deploy/create/standalone/docker",
                  "deploy/create/standalone/linux",
                  "deploy/create/standalone/windows",
                ],
              },
              {
                label: "Shared Hosting",
                items: [
                  "deploy/hosted",
                  "deploy/hosted/providers",
                  "deploy/hosted/hardware",
                  "deploy/hosted/purchased-what-next",
                  "deploy/hosted/oracle",
                ],
              },
              {
                label: "Game Panels",
                collapsed: true,
                items: [
                  {
                    label: "Pterodactyl",
                    autogenerate: { directory: "deploy/game-panels/pterodactyl" }
                  },
                  {
                    label: "PufferPanel",
                    autogenerate: { directory: "deploy/game-panels/pufferpanel" }
                  }
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
                  "customise/plugins",
                  {
                    label: "Core",
                    collapsed: true,
                    items: [
                      "customise/plugins/core/essentialsx",
                      "customise/plugins/core/luckperms",
                      "customise/plugins/core/worldedit",
                      "customise/plugins/core/worldguard",
                      "customise/plugins/core/vault",
                    ]
                  },
                  {
                    label: "Economy",
                    collapsed: true,
                    items: [
                      "customise/plugins/economy/chestshop",
                      "customise/plugins/economy/playerauctions",
                      "customise/plugins/economy/quickshop",
                      {
                        label: "zAuctionHouse",
                        slug: "customise/plugins/economy/zauctionhouse",
                        badge: {
                          text: "PREMIUM",
                          variant: "note",
                        },
                      },
                    ]
                  },
                  {
                    label: "Administration",
                    collapsed: true,
                    items: [
                      {
                        label: "LiteBans",
                        slug: "customise/plugins/administration/security/litebans",
                        badge: {
                          text: "PREMIUM",
                          variant: "note",
                        },
                      },
                    ]
                  },
                  {
                    label: "Gameplay",
                    collapsed: true,
                    items: [
                      "customise/plugins/gameplay/terra",
                    ]
                  },
                  {
                    label: "Cosmetic",
                    collapsed: true,
                    items: [
                      "customise/plugins/cosmetic/citizens",
                      "customise/plugins/cosmetic/minimotd",
                      "customise/plugins/cosmetic/znpcs",
                    ]
                  },
                  {
                    label: "Integration",
                    collapsed: true,
                    items: [
                      "customise/plugins/integration/discordsrv",
                      "customise/plugins/integration/dynmap",
                    ]
                  },
                ],
              },
              {
                label: "Mods",
                items: [
                  "customise/mods",
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
                  "administration/sftp",
                  "administration/textures",
                  "administration/advertising",
                  {
                    label: "Permissions",
                    items: [
                      "administration/permissions",
                      "administration/permissions/plugins"
                    ],
                    badge: {
                      text: "IMPORTANT",
                      variant: "danger"
                    },
                  },
                  {
                    label: "Security",
                    items: [
                      "administration/security",
                      "administration/security/anticheat",
                      "administration/security/antixray",
                      "administration/security/antiexploit",
                      "administration/security/antilag",
                      "administration/security/signed-chat",
                      "administration/security/tls",
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
                  {
                    label: "Performance",
                    items: [
                      "administration/performance",
                      "administration/performance/basic",
                      "administration/performance/advanced",
                    ],
                  },
                ],
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
                  "troubleshooting/network/tunnels",
                ],
              },
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
        light: "./src/assets/logos/logo-dark.svg",
        dark: "./src/assets/logos/logo-light.svg",
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