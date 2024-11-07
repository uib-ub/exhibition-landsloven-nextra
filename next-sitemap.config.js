/** @type {import('next-sitemap').IConfig} */
const nextConfig = require('./next.config.js');

const siteUrl = 'https://exhibition-landsloven-nextra.vercel.app/'

// Keep track of processed URLs to avoid duplicates
const processedUrls = new Set();

const transform = async (config, path) => {
  // Remove language extension from path if it exists
  const cleanPath = path.replace(/\.(en|no)$/, '');

  // If we've already processed this path, skip it
  if (processedUrls.has(cleanPath)) {
    return null;
  }

  // Mark this path as processed
  processedUrls.add(cleanPath);

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
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,

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
