/** @type {import('next-sitemap').IConfig} */
const members = require('./src/app/ourteam/[member]/Members');
// import products from './components/products';
// import allGuides from './components/guides';

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.gsaglobal.org.zw',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  trailingSlash: false,

    additionalPaths: async (config) => {
    const paths = [];
    Object.keys(members.default).forEach((key) => {
      paths.push({
        loc: `/ourteam/${key}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });
    
    return paths;
  },
};