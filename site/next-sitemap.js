/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    changefreq: 'weekly',
    additionalPaths: async (config) =>
        [await config.transform(config, 'cv.pdf')]
}
