// gatsby-config.js
const algoliaQuery = `{
  pages: allGhostPost {
		nodes {
			id
      title
      image: feature_image
      excerpt
      slug
      primary_author {
				name
        slug
      }
      tags {
				name
        slug
      }
      plaintext
      updated_at
      published_at
    }
  }
}`;

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) => data.pages.nodes,
    indexName: 'article_post',
    settings: {
      unretrievableAttributes: [
        'plaintext',
      ],
    },
    matchFields: ['updated_at'],
  },
];

module.exports = queries;
