module.exports = {
  siteMetadata: {
    title: `Journal of Discourses`,
    description: `Public sermons by Mormon leaders from 1851-1886`,
    author: `@mrmdotorg`,
    siteUrl: `https://jod.mrm.org`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Journal of Discourses`,
        short_name: `JoD`,
        start_url: `/`,
        background_color: `#122E51`,
        theme_color: `#122E51`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77116-18",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 500,
        forceSSL: true
      }
    },
    "gatsby-plugin-sitemap"
    /*
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        // analytics: {
        //   type: 'gtag',
        //   dataCredentials: 'include',
        //   config: {
        //     vars: {
        //       gtag_id: <GA_TRACKING_ID>,
        //       config: {
        //         <GA_TRACKING_ID>: {
        //           page_location: '{{pathname}}'
        //         },
        //       },
        //     },
        //   },
        // },
        canonicalBaseUrl: "https://jod.mrm.org/",
        components: ["amp-form"],
        excludedPaths: ["/404*", "/"],
        pathIdentifier: "/amp/",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        useAmpClientIdApi: true
      }
    }
    */
  ]
};
