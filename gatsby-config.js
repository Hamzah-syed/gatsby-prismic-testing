const path = require('path')
const dotenv = require('dotenv')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const prismicConfig = require('./prismic-configuration')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Prismic Blog',
    description: 'Blog example for Gatsby & Prismic',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    //     // accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //     linkResolver: require('./src/utils/linkResolver').linkResolver,
    //     schemas: {
    //       bloghome: require('./custom_types/bloghome.json'),
    //       post: require('./custom_types/post.json'),
    //     },
    //   },
    // },
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: prismicConfig.prismicRepo, // required
        pages: [
          {
            type: 'Page',
            match: `/seo/:uid`,
            path: '/seo',
            component: require.resolve('./src/templates/seoCountryPages.jsx'),
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-prismic-previews',
    //   options: {
    //     repositoryName: prismicConfig.prismicRepo,
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //   },
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(__dirname, 'src', 'images'),
      },
    },
  ],
}
