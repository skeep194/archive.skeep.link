import type { GatsbyConfig } from 'gatsby'
import metadata from './site-metadata'
import { remarkCodeHike } from '@code-hike/mdx'

const config: GatsbyConfig = {
  siteMetadata: metadata,
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-N2CEM3WYG4'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metadata.title,
        short_name: metadata.title,
        description: metadata.description,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            [remarkCodeHike, { theme: 'github-dark', lineNumbers: true }],
          ],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: metadata.siteUrl,
        sitemap: metadata.sitemap,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
  flags: {
    DEV_SSR: true,
  },
}

export default config
