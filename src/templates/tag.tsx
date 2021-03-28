import React from 'react';
import 'twin.macro';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import BaseLayout from '../layouts/base';
import ContentBanner, { ContentBannerProps } from '../components/article/content-banner';
import BulletArticle, { BulletArticleProps } from '../components/article/bullet-article';
import { Separator } from '../components/scaffolds';
import { GetTagQuery } from '../graphql-types';
import Pagination, { PageContext } from '../components/article/pagination';

const Tag: React.FC<PageProps<GetTagQuery, PageContext>> = ({ data, pageContext, location }) => {
  const banner: ContentBannerProps = {
    title: data.ghostTag?.name as string,
    information: data.ghostTag?.description as string,
    tags: [{ name: 'kategori', slug: '/artikel' }],
    image: data.ghostTag?.feature_image as string,
  };
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

  // SEO data
  const siteMeta = data.site?.siteMetadata;
  const blogMeta = data.ghostSettings;
  const canonical = `${siteMeta.url}/${location.pathname}`;
  const title = banner.title || blogMeta.title;
  const description = banner.information || blogMeta.description;
  const shareImage = banner.image || blogMeta.cover_image;
  const publisherLogo = blogMeta.logo;

  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': 'Series',
    url: canonical,
    image: shareImage,
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
    <BaseLayout>
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
      </Helmet>
      <ContentBanner {...banner} />
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

export default Tag;

export const pageQuery = graphql`
  query getTag($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    ghostSettings {
      ...GhostSettingsFields
    }
    site {
      siteMetadata {
        ...SiteMetadataFields
      }
    }
  }
`;
