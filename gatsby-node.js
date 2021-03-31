const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

/**
 * Create pages for
 * All tags, posts and author from article CMS (Ghost)
 * All pages and product from prismic
 */
exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = 10;
  const { createPage } = actions;

  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allPrismicPage {
        nodes {
          uid
        }
      }
      allPrismicProduct {
        nodes {
          uid
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Extract query results
  const tags = result.data.allGhostTag.edges;
  const authors = result.data.allGhostAuthor.edges;
  const posts = result.data.allGhostPost.edges;
  const pages = result.data.allPrismicPage.nodes;
  const products = result.data.allPrismicProduct.nodes;

  // Load templates
  const indexTemplate = path.resolve(`./src/templates/index.tsx`);
  const tagsTemplate = path.resolve(`./src/templates/tag.tsx`);
  const authorTemplate = path.resolve(`./src/templates/author.tsx`);
  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  const pageTemplate = path.resolve(`./src/templates/page.tsx`);
  const productTemplate = path.resolve(`./src/templates/product.tsx`);

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    // This part here defines, that our tag pages will use
    // a `/kategori/:slug/` permalink.
    node.url = `/kategori/${node.slug}/`;

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}page/${prevPageNumber}/`
        : null;
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null;

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: tagsTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      });
    });
  });

  // Create author pages
  authors.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    // This part here defines, that our author pages will use
    // a `/penulis/:slug/` permalink.
    node.url = `/penulis/${node.slug}/`;

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}halaman/${prevPageNumber}/`
        : null;
      const nextPagePath = nextPageNumber ? `${node.url}halaman/${nextPageNumber}/` : null;

      createPage({
        path: i === 0 ? node.url : `${node.url}halaman/${i + 1}/`,
        component: authorTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      });
    });
  });

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/artikel/:slug/` permalink.
    node.url = `/artikel/${node.slug}/`;

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  // Create index pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: indexTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/artikel`;
      } else {
        return `/artikel/halaman`;
      }
    },
  });

  // Create common page pages
  pages.forEach((node) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/${node.uid}`;

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        uid: node.uid,
      },
    });
  });

  // Create product pages
  products.forEach((node) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/${node.uid}`;

    createPage({
      path: node.url,
      component: productTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        uid: node.uid,
      },
    });
  });
};
