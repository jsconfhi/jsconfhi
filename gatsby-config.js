module.exports = {
  siteMetadata: {
    title: 'JSConf: Hawaii',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "JSConf Hawaii",
        short_name: "JSConf:HI",
        start_url: "/",
        background_color: "#03282c",
        theme_color: "#03282c",
        display: "minimal-ui",
        icon: "src/img/logo.png"
      },
    },
    'gatsby-plugin-offline'
  ],
};
