module.exports = {
  title: 'iVendi',
  tagline: 'The documentation for iVendi calculator, widgets and quoteware API',
  url: 'https://ivendi-support.github.io/documentation',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ivendi-support', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  url:'https://ivendi-support.github.io',
  baseUrl:'/documentation/',
  scripts:[
      'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'iVendi Logo',
        src: 'img/logo-dark.png',
        srcDark:'img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ivendi-support/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo:{
        alt: 'Service Desk Institute',
        src: 'img/SDI_Corporate_Membership_logo.png'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/iVendiUK',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/ivendi',
            },
            {
              label: 'Twitter',
              href: 'https://www.twitter.com/iVendiLtd',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC1M23RFXOCEbElL7nB4O7hA',
            },
            {
              label: 'Website',
              href: 'https://www.ivendi.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} iVendi Ltd`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ivendi-support/documentation-src/edit/master/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ivendi-support/documentation-src/edit/master/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
