module.exports = {
  plugins: [
    `gatsby-theme-garden-custom`,
    {
      resolve: `gatsby-theme-garden-custom`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
    `gatsby-remark-double-brackets-link-custom`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./plugins/gatsby-remark-double-brackets-link-custom`),
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
