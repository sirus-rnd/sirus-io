require('dotenv-defaults/config');

module.exports = {
  siteMetadata: {
    title: 'Sirus Teknologi Utama',
    titleTemplate: '%s · Ekosistem Layanan Kesehatan Berkelanjutan',
    description:
      'Suspendisse potenti. Donec auctor quam et tortor condimentum, volutpat facilisis lorem facilisis.',
    url: process.env.BASE_URL,
    siteUrl: process.env.BASE_URL,
    image: 'images/banner.jpg',
    logo: 'images/sirus-logo.png',
  },
  plugins: [
    // code
    'gatsby-plugin-typescript',
    // style & design system
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-emotion',
    // assets
    'gatsby-image',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#fe553a',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // data source
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        version: 'v3',
      },
    },
    {
      resolve: 'gatsby-transformer-rehype',
      options: {
        filter: node => node.internal.type === `GhostPost`,
        source: node => node.html,
        plugins: [
          {
            resolve: 'gatsby-rehype-prismjs',
          },
          {
            resolve: 'gatsby-rehype-inline-images',
          },
        ],
      },
    },
    {
      resolve: 'ghost-images',
      options: {
        lookup: [
          {
            type: 'GhostPost',
            imgTags: ['feature_image'],
          },
          {
            type: 'GhostTag',
            imgTags: ['feature_image'],
          },
          {
            type: 'GhostAuthor',
            imgTags: ['profile_image', 'cover_image'],
          },
          {
            type: 'GhostSettings',
            imgTags: ['cover_image'],
          },
        ],
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          homepage: require('./src/utils/prismic-schemas/homepage.json'),
          contact: require('./src/utils/prismic-schemas/contact.json'),
          page: require('./src/utils/prismic-schemas/page.json'),
          product: require('./src/utils/prismic-schemas/product.json'),
        },
      },
    },
    // SEO & marketing
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false,
        routeChangeEventName: 'page-route-changed',
      },
    },
  ],
};
