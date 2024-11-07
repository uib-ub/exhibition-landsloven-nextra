/** @type {import('next-sitemap').IConfig} */
const nextConfig = require('./next.config.js');

const siteUrl = 'https://exhibition-landsloven-nextra.vercel.app/'

const transform = async (config, path) => {
  // Remove language extension from path if it exists
  const cleanPath = path.replace(/\.(en|no)$/, '');

  return {
    loc: cleanPath,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  };
};

module.exports = {
  siteUrl: siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,

  // exclude: ['/server-sitemap.xml'],

  alternateRefs: [
    ...nextConfig.i18n.locales
      .map(locale => ({
        href: `${siteUrl}/${locale}`,
        hreflang: locale,
      }))
      .filter(h => h.hreflang !== 'no'),

    {
      href: siteUrl,
      hreflang: 'no',
    },
  ],

  // Default transformation function
  transform,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
