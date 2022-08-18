module.exports = {
  siteMetadata: {
    title: `20 Stops`,
    description: `Ran Xin is a Cinematographer.`,
    author: `@aldousxin1`,
    siteUrl: `https://20stops.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `20-stops`,
        short_name: `20stops`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rx.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
