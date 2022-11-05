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
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {

        appId: 'Y9DSYUPTUW',

        apiKey: 'ee4cd78d14b03b95a8b6b85635f8b401',
  
        indexName: 'prod_smd'
      },
      colorMode: {
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
            to: 'guides',
            position: 'left'
          },
          {
            label: 'FAQs',
            to: 'faqs',
            position: 'left',
          },
          {
            label: 'Contribute',
            to: 'contribute',
            position: 'left',
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
            title: 'Documentation',
            items: [
              {
                label: 'Enhancements',
                to: '/enhancements',
              },
              {
                label: 'Hosting',
                to: '/hosting',
              },
              {
                label: 'Tools & Utilities',
                to: '/tools',
              },
              {
                label: 'Troubleshooting',
                to: '/troubleshoot',
              },
            ],
          },
          {
            title: 'Complete Guides',
            items: [
              {
                label: 'Cloud Deployments',
                to: '/guides/cloud',
              },
              {
                label: 'Plugin Configurations',
                to: '/guides/plugins',
              },
              {
                label: 'Service Tutorials',
                to: '/guides/service',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Become a contributor',
                to: 'https://github.com/setupmd/.github/blob/master/CONTRIBUTING.md',
              },
              {
                label: 'Content Guidelines',
                to: 'https://setup.md/contribute',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'GitHub',
                to: 'https://smd.gg/github',
              },
              {
                label: 'Discord',
                to: 'https://smd.gg/discord',
              },
              {
                label: 'BuyMeACoffee',
                to: 'https://buymeacoffee.com/daaan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} setup.md  All rights reserved.`,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🎉 setup.md has a new look, <a href="https://github.com/setupmd/docs/issues/new/choose">let us know your thoughts</a>!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
