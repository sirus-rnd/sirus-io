import React from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import { FluidObject } from 'gatsby-image';
import BaseLayout from '../layouts/base';
import Jumbotron, { JumbotronItem } from '../components/jumbotron';
import SimpleArticle from '../components/article/simple-article';
import FeaturedArticle from '../components/article/featured-article';
import { Separator } from '../components/scaffolds';
import {
  GetHomepageDataQuery,
  GhostPostFieldsFragment,
  PrismicHomepageBodyFeaturedContents,
} from '../graphql-types';
import { Article } from '../components/article/article';
import FeaturedContentSlice from '../components/slices/featured-content';

export interface HomeProps {
  data: GetHomepageDataQuery;
}

function ghostEdgeToArticle(post: GhostPostFieldsFragment): Article {
  return {
    author: {
      name: post?.primary_author?.name,
      slug: post?.primary_author?.slug,
      image: post?.primary_author?.profileImageSharp?.childImageSharp?.fluid,
    },
    tags: post.tags?.map(tag => ({ name: tag?.name, slug: tag?.slug })),
    excerpt: post.excerpt,
    released: new Date(post?.published_at),
    slug: post.slug,
    title: post.title,
    image: post.featureImageSharp?.childImageSharp?.fluid as FluidObject,
  } as Article;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const pageData = data.prismicHomepage?.data;
  const jumbotronItems = pageData?.jumbotron_slider?.map(
    item =>
      ({
        title: item?.title,
        content: item?.content,
        image: item?.image?.fluid,
      } as JumbotronItem),
  ) as JumbotronItem[];
  const firstNode: GhostPostFieldsFragment = data?.allGhostPost?.edges[0]?.node;
  const article = firstNode ? ghostEdgeToArticle(firstNode) : null;
  const articles = data?.allGhostPost?.edges
    ?.filter((_, i) => i > 0)
    ?.map(edge => ghostEdgeToArticle(edge?.node as GhostPostFieldsFragment));

  // SEO data
  const siteMeta = data.site?.siteMetadata;
  const canonical = `${siteMeta.url}/`;
  const title = siteMeta.title;
  const description = siteMeta.description;
  const shareImage = `${siteMeta.url}/${siteMeta.image}`;
  const shareImageDim = { width: 500, height: 300 };
  const publisherLogo = `${siteMeta.url}/${siteMeta.logo}`;

  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': 'WebSite',
    url: canonical,
    image: {
      '@type': `ImageObject`,
      url: shareImage,
      width: shareImageDim.width,
      height: shareImageDim.height,
    },
    publisher: {
      '@type': `Organization`,
      name: title,
      logo: {
        '@type': `ImageObject`,
        url: publisherLogo,
        width: 60,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': siteMeta.url,
    },
    description,
  };

  return (
    <BaseLayout dark={true}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd, undefined, 4)}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={shareImage} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:image:width" content={shareImageDim.width.toString()} />
        <meta property="og:image:height" content={shareImageDim.height.toString()} />
      </Helmet>
      <Jumbotron items={jumbotronItems} />
      {pageData?.body?.map((slice, idx) => {
        switch (slice?.slice_type) {
          case 'featured_contents': {
            return (
              <FeaturedContentSlice key={idx} data={slice as PrismicHomepageBodyFeaturedContents} />
            );
          }
        }
      })}
      <section
        tw="flex items-center py-16 px-8"
        css={css`
          min-height: 100vh;
        `}
      >
        <div tw="container">
          <h3 tw="text-center mb-16">artikel terbaru</h3>
          <div tw="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>{article ? <FeaturedArticle {...article} /> : ''}</div>
            <div>
              {articles.map((article, idx, articles) => (
                <div>
                  <SimpleArticle key={article.slug} {...article} />
                  {idx + 1 < articles.length ? <Separator /> : ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;

export const query = graphql`
  query getHomepageData {
    prismicHomepage {
      data {
        jumbotron_slider {
          title
          content
          image {
            url
            alt
            dimensions {
              width
              height
            }
            fluid(maxWidth: 1200, maxHeight: 300) {
              ...PrismicImageFluidFields
            }
          }
        }
        body {
          ... on PrismicHomepageBodyFeaturedContents {
            slice_type
            slice_label
            primary {
              title
              navigation_position
            }
            items {
              image {
                url
                alt
                dimensions {
                  width
                  height
                }
                fluid(maxWidth: 500, maxHeight: 500) {
                  ...PrismicImageFluidFields
                }
              }
              name
              information {
                raw
              }
            }
          }
        }
      }
    }
    allGhostPost(limit: 3, sort: { fields: published_at, order: DESC }) {
      totalCount
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    site {
      siteMetadata {
        ...SiteMetadataFields
      }
    }
  }
`;
