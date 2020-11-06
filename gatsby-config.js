module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
            options: {
              titleToURLPath: `${__dirname}/resolve-url.js`
            },
          },
          {
            resolve: `gatsby-remark-double-parenthesis-link`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx"], // or ['RemarkMarkdown'] (or both)
      },
    },
  ],
  siteMetadata: {
    title: `Don't fear the blank space`,
  },
}
