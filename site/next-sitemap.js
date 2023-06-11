/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://nkrusch.github.io',
    generateRobotsTxt: false,
    changefreq: 'weekly',
    additionalPaths: async (config) => [
        await config.transform(config, 'cv.pdf'),
        await config.transform(config, 'files/coqpl_abstract.pdf'),
        await config.transform(config, 'files/exam_doc.pdf'),
        await config.transform(config, 'files/exam_slides.pdf'),
        await config.transform(config, 'files/grd_poster.pdf'),
        await config.transform(config, 'files/mwp_slides.pdf'),
        await config.transform(config, 'files/proposal.pdf'),
        await config.transform(config, 'files/proposal_slides.pdf'),
        await config.transform(config, 'files/scot.pdf'),
        await config.transform(config, 'files/splashcomp22-p10.pdf'),
        await config.transform(config, 'files/types22_paper.pdf'),
        await config.transform(config, 'files/types22_slides.pdf'),
        await config.transform(config, 'files/vmcai_paper.pdf'),
        await config.transform(config, 'files/vmcai_slides.pdf'),
    ]
}
