// @ts-check
/** @jsx jsx */
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { jsx } from '@emotion/react'; // Import jsx from emotion/react

import { themes as prismThemes } from 'prism-react-renderer';

// docusaurus.config.js

const { library } = require('@fortawesome/fontawesome-svg-core');
const { faGithub } = require('@fortawesome/free-brands-svg-icons');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Erphise Wiki',
  tagline: 'Documentation through my homelab journey',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://erphise.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'erphise', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        calendar: 'gregory',
        path: 'es',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/erphise/wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/erphise/wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        // The application ID provided by Algolia
        appId: 'SSE8019SOT',

        // Public API key: it is safe to commit it
        apiKey: '4bacd8402a5f38e780d26fca88d9eb46',

        indexName: 'wiki',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead of history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
      },
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'windowsSidebar',
            position: 'left',
            label: 'Windows',
          },
          {
            href: 'https://github.com/erphise/wiki',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            icon: (
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 0C114.62 0 0 114.62 0 256c0 113.36 73.31 209.29 175.02 243.33 12.8 2.36 17.47-5.56 17.47-12.34 0-6.09-.24-22.24-.36-43.67-71.27 15.49-86.31-34.35-86.31-34.35-11.65-29.58-28.41-37.47-28.41-37.47-23.23-15.86 1.75-15.54 1.75-15.54 25.63 1.81 39.09 26.34 39.09 26.34 22.75 39.02 59.74 27.75 74.34 21.2 2.3-16.54 8.88-27.75 16.19-34.16-56.58-6.41-116.04-28.28-116.04-125.63 0-27.75 9.94-50.5 26.34-68.35-2.58-6.43-11.42-32.35 2.52-67.38 0 0 21.41-6.85 70.2 26.06a242.74 242.74 0 0 1 126.67 0c48.78-32.91 70.2-26.06 70.2-26.06 14.04 35.03 5.1 61.05 2.52 67.38 16.41 17.85 26.34 40.6 26.34 68.35 0 97.59-59.61 119.16-116.28 125.5 9.13 7.9 17.3 23.49 17.3 47.33 0 34.27-.3 61.92-.3 70.34 0 6.85 4.57 14.85 17.66 12.32C438.7 465.29 512 369.36 512 256.01 512 114.62 397.38 0 256 0z"
                ></path>
              </svg>
            ),
          },
          {
            type: 'localeDropdown',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/erphise/wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Erphise Wiki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
