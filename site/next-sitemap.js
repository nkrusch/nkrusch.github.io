/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    changefreq: 'weekly',
    additionalPaths: async (config) => [
        await config.transform(config, 'cv.pdf'),
        await config.transform(config, 'exam_doc.pdf'),
        await config.transform(config, 'exam_slides.pdf'),
        await config.transform(config, 'types22_slides.pdf'),
        await config.transform(config, 'types22_paper.pdf')
    ]
}
