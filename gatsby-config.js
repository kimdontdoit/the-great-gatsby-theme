module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://admiring-goldstine-f7369a.netlify.app",
    image: "/images/snape.jpg",
    twitterUsername: "",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/styles/variables";`,
        sourceMap: true,
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        //printRejected: true, // Print removed selectors and processed file names
        purgeOnly: ["src/styles/global.scss"], // Purge only these files/folders
      },
    },
  ],
};
