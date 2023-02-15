/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Drupal/Gatsby POC`,
    // siteUrl: `https://gatsby-poc.ddev.site`
    siteUrl: `https://dev-jsutta.pantheonsite.io`
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_URL,
        // baseUrl: `https://gatsby-poc.ddev.site`,
        apiBase: `jsonapi`,
        headers: {
          'api-key': process.env.JSON_API_KEY
          // 'api-key': `6851d9a48aade7a27975b46cbecb007e`
        },
        fastBuilds: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-trigger-deploy`,
    //   options: {
    //     secretKey: process.env.JSON_API_KEY,
    //     addressCallback: 'http://localhost:8000/build-it',
    //   },
    // },
    `@chakra-ui/gatsby-plugin`, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `./src/images/`
      },
      __key: `images`
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-drupal-menu-links`,
    //   options: {
    //     baseUrl: process.env.DRUPAL_URL,
    //     apiBase: `jsonapi`, // optional, defaults to `jsonapi`
    //     menus: [
    //       "main"
    //     ], // Which menus to fetch, there are the menu IDs.
    //   },
    // }
    // "gatsby-source-drupal-menu-links": "^3.0.1",
    // https://www.drupal.org/project/jsonapi_menu_items
  ]
};
