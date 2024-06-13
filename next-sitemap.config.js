/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000/',
  // siteUrl: process.env.SITE_URL || 'http://ubuntu.local:3000/',
  // siteUrl: process.env.SITE_URL || 'https://exhibition-landsloven-nextra.vercel.app/',
  // transform: async (config, path) => {
  //   // Remove the language code (e.g., '.en') from the URL
  //   const newPath = path.replace(/\.[a-z]{2}$/, ''); 
  //   return {
  //     loc: newPath,
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //   };
  // },

  transform: async (config, path) => {
    // Match and capture the language code at the end of the URL
    const langPattern = /\.([a-z]{2})$/;
    const match = path.match(langPattern);

    if (match) {
      // Extract the language code
      const langCode = match[1];
      // Remove the language code from the end of the path
      const newPath = path.replace(langPattern, '');
      // Construct the new path with the language code at the beginning
      const transformedPath = `/${langCode}${newPath}`;
      return {
        loc: transformedPath,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Return the path unchanged if no language code is found
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  generateRobotsTxt: true, // (optional)
  // ...other options
}


