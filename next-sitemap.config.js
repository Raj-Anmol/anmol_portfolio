/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://anmolraj.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://anmolraj.vercel.app/sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};