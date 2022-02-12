const siteUrl = /*process.env.siteUrl || */ `https://kimdontdoit.com`;

module.exports = {
  siteMetadata: {
    siteName: `The Great Gatsby`,
    defaultTitle: `The Great Gatsby`,
    defaultDescription: `Default meta description`,
    author: `@kimdontdoit`,
    siteUrl,
    defaultImage: ``,
    twitterUsername: `@kimdontdoit`,
  },
  plugins: [`gatsby-plugin-postcss`],
};
