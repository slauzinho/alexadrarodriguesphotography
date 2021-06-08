const dotenv = require("dotenv")
const tailwindConfig = require("./tailwind.config.js")

dotenv.config({ path: ".env" })

module.exports = {
  plugins: [
    /* {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: `YOUR_APP_ID`,
        version: `v11.0`,
        xfbml: true,
        cookie: false,
        includeInDevelopment: false,
        debug: false,
        autoLogAppEvents: true,
        language: `en_US`,
      },
    }, */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-179570787-1",
        head: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "bz3qpcoi",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Yanone Kaffeesatz\:300,400,500`,
          `Dancing Script\:500,600,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-179570787-1",
        head: false,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
  siteMetadata: {
    title: `Alexandra Rodrigues Photography`,
    siteUrl: "https://alexandrarodriguesphotography.pt",
    description:
      "Portfolio website da Alexandra Rodrigues, sessões de fotos variadas, newborn, recem-nascido, smash the cake, casamentos, batizados, gravidas, natal.",
  },
}
