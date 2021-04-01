import React from 'react';
import 'twin.macro';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import BaseLayout from '../layouts/base';
import ContentBanner, { ContentBannerProps } from '../components/article/content-banner';
import Sidenav, { SidenavProps, NavItem } from '../components/side-nav';
import BulletArticle, { BulletArticleProps } from '../components/article/bullet-article';
import { Separator } from '../components/scaffolds';
import { GetIndexPostQuery } from '../graphql-types';
import Pagination, { PageContext } from '../components/article/pagination';

const Index: React.FC<PageProps<GetIndexPostQuery, PageContext>> = ({
  data,
  pageContext,
  location,
}) => {
  const banner: ContentBannerProps = {
    title: data.ghostSettings?.title as string,
    information: data.ghostSettings?.description as string,
    subheader: 'Blog',
    image: data.ghostSettings?.coverImageSharp?.childImageSharp?.fluid,
  };
  const navs: SidenavProps = {
    title: 'kategori',
    links: data.allGhostTag?.edges?.map(
      edge =>
        ({
          caption: edge?.node?.name as string,
          url: `/kategori/${edge?.node?.slug}`,
        } as NavItem),
    ),
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
        image: edge?.node?.featureImageSharp?.childImageSharp?.fluid,
      } as BulletArticleProps),
  );

  // SEO data
  const siteMeta = data.site?.siteMetadata;
  const blogMeta = data.ghostSettings;
  const canonical = `${siteMeta.url}/${location.pathname}`;
  const title = blogMeta.title;
  const description = blogMeta.description;
  const shareImage = blogMeta.cover_image;
  const shareImageDim = { width: 500, height: 300 };
  const publisherLogo = blogMeta.logo;

  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': 'Series',
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
        <meta property="og:image:width" content={shareImageDim.width.toString()} />
        <meta property="og:image:height" content={shareImageDim.height.toString()} />
      </Helmet>
      <ContentBanner {...banner} />
      <section tw="py-16 px-8">
        <div tw="container grid grid-cols-none md:grid-cols-3 gap-12">
          <Sidenav tw="w-full" {...navs} />
          <div tw="lg:col-span-2">
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

export default Index;

export const pageQuery = graphql`
  query getIndexPost($limit: Int!, $skip: Int!) {
    allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    allGhostTag(sort: { order: ASC, fields: name }) {
      edges {
        node {
          ...GhostTagFields
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
