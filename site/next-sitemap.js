/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://nkrusch.github.io',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    additionalPaths: async (config) => [
        await config.transform(config, 'cv.pdf'),
        await config.transform(config, 'files/splashcomp22-p10.pdf'),
        await config.transform(config, 'files/mwp_slides.pdf'),
        await config.transform(config, 'files/grd_poster.pdf')
    ]
}
