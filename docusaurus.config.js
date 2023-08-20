// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'setup.md',
  tagline: 'The Minecraft Knowledgebase',
  url: 'https://setup.md',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'setupmd', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/setupmd/docs/tree/v2/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars-guides.js'),
        // ... other options
      },
    ],
    [
      '@cmfcmf/docusaurus-search-local',
      {
        language: "en",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'setup.md Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Server Docs',
            to: '/docs',
            position: 'left',
          },
          {
            label: 'Guides',
            to: '/guides',
            position: 'left'
          },
          {
            href: 'https://github.com/setupmd/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Enhancements',
                to: '/e',
              },
              {
                label: 'Hosting',
                to: '/h',
              },
              {
                label: 'Tools & Utilities',
                to: '/t',
              },
              {
                label: 'Troubleshooting',
                to: '/ts',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'Cloud',
                to: '/guides/cloud',
              },
              {
                label: 'Minecraft',
                to: '/guides/minecraft',
              },
              {
                label: 'Self-Hosting',
                to: '/guides/self-host',
              },
              {
                label: 'Services',
                to: '/guides/service',
              },
            ],
          },
          {
            title: 'PROJECT',
            items: [
              {
                label: 'Affiliated Services',
                to: '/affiliates',
              },
              {
                label: 'Contribution Guidelines',
                to: '/contribute',
              },
              {
                label: 'Frequent Questions',
                to: '/faq',
              },
              {
                label: 'Sponsor via Github',
                to: 'https://github.com/sponsors/setupmd'
              }
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub Repo',
                to: 'https://github.com/setupmd/docs',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/pXaQgzneed',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} setup.md  All rights reserved.`,
      },
      //announcementBar: {
      //  id: 'support_us',
      //  content:
      //    '🚨 Mojang updated the EULA, make sure you\'re familiar with the [changes](https://www.setup.md/eula).',
      //  backgroundColor: '#fafbfc',
      //  textColor: '#091E42',
      //  isCloseable: false,
      //},
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
