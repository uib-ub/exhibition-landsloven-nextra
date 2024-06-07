const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no'
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/tyvebolken',
  //       destination: '/tyvebolken/introduksjon',
  //     },
  //     {
  //       source: '/X-designalternativer',
  //       destination: '/n',
  //     },
  //     // Add more rewrites as needed
  //   ];
  // },
});