module.exports = {
  siteMetadata: {
    title: `craftbytes`,
    description: `Web and mobile apps development and design`,
    author: `@craftbytes`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // Sharp plugins disabled for local development due to ARM64/Python compatibility
    // Re-enable for Ubuntu deployment: gatsby-transformer-sharp, gatsby-plugin-sharp, gatsby-plugin-image
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
