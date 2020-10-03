const dotenv = require("dotenv")
const tailwindConfig = require("./tailwind.config.js")

dotenv.config({ path: ".env" })

module.exports = {
  plugins: [
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
  ],
  siteMetadata: {
    title: `Alexandra Rodrigues Photography`,
    siteUrl: "https://alexandrarodriguesphotography.pt",
    description: "Portfolio website da Alexandra Rodrigues",
  },
}
