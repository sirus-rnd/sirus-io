import React from 'react';
import 'twin.macro';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import BaseLayout from '../layouts/base';
import { css } from '@emotion/react';
import BulletArticle, { BulletArticleProps } from '../components/article/bullet-article';
import { Separator } from '../components/scaffolds';
import { GetAuthorQuery } from '../graphql-types';
import Pagination, { PageContext } from '../components/article/pagination';

const Author: React.FC<PageProps<GetAuthorQuery, PageContext>> = ({
  data,
  pageContext,
  location,
}) => {
  const articles: BulletArticleProps[] = data.allGhostPost?.edges?.map(
    edge =>
      ({
        title: edge?.node?.title,
        author: edge?.node?.authors[0],
        excerpt: edge?.node?.excerpt,
        released: new Date(edge.node.published_at),
        tags: edge.node?.tags?.map(tag => ({
          name: tag?.name,
          slug: tag?.slug,
        })),
        slug: edge?.node?.slug,
        image: edge?.node?.feature_image,
      } as BulletArticleProps),
  );
  const author = data.ghostAuthor;

  // SEO
  const siteMeta = data.site?.siteMetadata;
  const blogMeta = data.ghostSettings;
  const canonical = `${siteMeta.url}/${location.pathname}`;
  const title = `${author.name} - ${blogMeta.title}`;
  const description = author.bio || `tulisan ${author.name}`;
  const shareImage = author.profile_image || author.cover_image || blogMeta.cover_image;

  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': `Person`,
    name: author.name,
    url: canonical,
    image: shareImage,
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': siteMeta.url,
    },
    affiliation: {
      '@type': `Organization`,
      name: blogMeta.title,
    },
  };

  return (
    <BaseLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={blogMeta.title} />
        <meta property="og:type" content="profile" />
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
      </Helmet>
      <section
        css={css`
          background-image: url('${author?.cover_image}');
          background-size: cover;
        `}
      >
        <div
          tw="py-16 px-8 text-white"
          css={css`
            background: rgba(0, 0, 0, 0.5);
            color: white;
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 0.4) 100%
            );
          `}
        >
          <div tw="container grid grid-cols-5 gap-12">
            <div tw="col-span-3 col-start-2 flex items-center">
              <div
                tw="rounded-full"
                css={css`
                  width: 200px;
                  height: 200px;
                  background-image: url('${author?.profile_image}');
                  background-size: cover;
                `}
              ></div>
              <div tw="flex-1 pl-8">
                <h1 tw="text-primary">{author?.name}</h1>
                <p>{author?.bio ?? '-'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section tw="py-16 px-8">
        <div tw="container grid grid-cols-1 lg:grid-cols-5">
          <div tw="lg:col-span-3 lg:col-start-2 lg:px-0">
            {articles.map((article, idx, articles) => (
              <div>
                <BulletArticle key={article.slug} {...article} />
                {idx + 1 < articles.length ? <Separator /> : ''}
              </div>
            ))}
            <Pagination pageContext={pageContext} />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Author;

export const pageQuery = graphql`
  query getAuthor($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorFields
    }
    ghostSettings {
      ...GhostSettingsFields
    }
    site {
      siteMetadata {
        ...SiteMetadataFields
      }
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
