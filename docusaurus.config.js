/* eslint-disable */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const posthogPlugin = require('./plugins/posthog-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */ defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/setupmd/docs/tree/v2/',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}


const SECTIONS = [
  defineSection('guides'),

];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'setup.md',
  tagline: 'The Minecraft Knowledgebase',
  // TODO: Update base url
  url: 'https://setup.md',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'setupmd', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-gb',
    locales: ['en-gb'],
  },

  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/setupmd/docs/tree/v2/',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    ...SECTIONS,
    ...UIKitReferencePlugins,
    webpackPlugin,
    posthogPlugin,
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'setup.md',
          height: '50px',
          width: '120px',
        },
        items: [
          {
            label: 'Quick Start',
            to: '/getting-started',
            position: 'left',
          },
          {
            label: 'Contributing',
            to: '/contribute',
            position: 'left',
          },
          {
            label: 'Tutorials',
            to: '/guides/',
            position: 'left',
          },
          {
            href: 'https://smd.gg/docs',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://smd.gg/discord',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'setup.md',
          height: '36px',
        },
        links: [
          {
            title: 'On The Web',
            items: [
              {
                label: 'Discord',
                href: 'https://smd.gg/discord',
              },
              {
                label: 'Github',
                href: 'https://smd.gg/docs',
              },
            ],
          },
          
        ],
        copyright: 'Copyright © setup.md since 2022. All rights reserved.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      posthog: {
        apiKey: 'c1X6knGkGuxT4WFysAWi6chjtoMmTzILKO7inv7hIgs',
      },
    }),
};

module.exports = config;
