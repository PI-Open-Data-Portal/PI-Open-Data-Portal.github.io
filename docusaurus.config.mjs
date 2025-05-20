import { themes } from 'prism-react-renderer';

import myLoaders from './plugins/my-loaders.mjs';
import tailwindLoader from './plugins/tailwind-loader.mjs';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
export default {
  title: 'DocSearch by Algolia',
  tagline: 'The best search experience for docs, integrated in minutes, for free.',
  url: 'https://PI-Open-Data-Portal.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'PI-Open-Data-Portal',
  projectName: 'PI-Open-Data-Portal.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          editUrl: '',
          versions: {
            current: {
              label: 'current',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [myLoaders, tailwindLoader],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'R2IYF7ETH7',
        apiKey: '599cec31baffa4868cae4e79f180729b',
        indexName: 'docsearch',
        contextualSearch: true,
      },
      metadata: [
        {
          name: 'google-site-verification',
          content: '23yIHmCD_xnJb_6e3s-w7M29Kydahk-d86ObMWOrvRg',
        },
      ],
      navbar: {
        hideOnScroll: true,
        logo: {
          src: 'img/logopng.png',
          srcDark: 'img/logo2.png',
          style: { width: '75px', height: '75px' } // Ajuste o tamanho conforme necessário
        },

        items: [

          // right
          {
            label: 'Docs',
            to: 'docs/what-is-docsearch',
            position: 'right',
          },
          {
            href: 'https://github.com/PI-Open-Data-Portal',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/what-is-docsearch',
              },
              {
                label: 'FAQ',
                to: 'docs/docsearch-program',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/PI-Open-Data-Portal',
              },
              {
                label: 'Repository',
                to: 'https://github.com/PI-Open-Data-Portal/PI-Open-Data-Portal.github.io',
              },
            ],
          },
          {
            title: 'Open Data Portal',
            items: [
              {
                label: 'Open Data Portal',
                to: 'https://pi-open-data-portal.github.io/'
              }
            ]
          },

        ],
      },
      image: 'img/og_image.png',
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};
