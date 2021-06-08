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
      }
      tags {
				name
      }
      plaintext
      updated_at
    }
  }
}`;

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) => data.pages.nodes,
    indexName: 'article_post',
    settings: {},
    matchFields: ['updated_at'],
  },
];

module.exports = queries;
