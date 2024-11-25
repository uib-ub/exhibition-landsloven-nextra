const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3|ogg)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name][ext]",
      },
    });

    return config;
  },
});
