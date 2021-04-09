import React from 'react';
import 'twin.macro';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import BaseLayout from '../layouts/base';
import { GetPostQuery } from '../graphql-types';
import { PageContext } from '../components/article/pagination';
import FullArticle, { FullArticleProps } from '../components/article/full-article';
import { ArticleAtribution } from '../components/article/article';

const Post: React.FC<PageProps<GetPostQuery, PageContext>> = ({ data, location }) => {
  const post = data.ghostPost;
  const article: FullArticleProps = {
    title: post?.title as string,
    author: {
      name: post?.primary_author?.name,
      slug: post?.primary_author?.slug,
      image: post?.primary_author?.profileImageSharp?.childImageSharp?.fluid,
    },
    excerpt: post?.excerpt as string,
    released: new Date(post?.published_at),
    tags: post?.tags?.map(tag => ({
      name: tag?.name as string,
      slug: tag?.slug as string,
    })) as ArticleAtribution[],
    slug: post?.slug as string,
    image: post?.featureImageSharp?.childImageSharp?.fluid,
    content: post?.childHtmlRehype?.html,
    toc: post?.childHtmlRehype?.tableOfContents,
  };

  // SEO
  const siteMeta = data.site?.siteMetadata;
  const blogMeta = data.ghostSettings;
  const canonical = `${siteMeta.url}/${location.pathname}`;
  const title = post.meta_title || post.title;
  const shareImage = post.feature_image || blogMeta.cover_image || siteMeta.image;
  const publisherLogo = `${siteMeta.url}/${siteMeta.logo}`;
  const author = post.primary_author;
  const description = post.meta_description || post.excerpt;

  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': `Article`,
    author: {
      '@type': `Person`,
      name: author.name,
      image: `${siteMeta.url}${author.profileImageSharp?.childImageSharp?.fluid?.src}`,
    },
    keywords: post.tags.length ? post.tags.join(`, `) : undefined,
    headline: title,
    url: canonical,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    image: shareImage,
    publisher: {
      '@type': `Organization`,
      name: siteMeta.title,
      logo: {
        '@type': `ImageObject`,
        url: publisherLogo,
        width: 60,
        height: 60,
      },
    },
    description,
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': siteMeta.url,
    },
  };

  return (
    <BaseLayout dark={true}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.og_title || title} />
        <meta property="og:description" content={post.og_description || description} />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        {post.tags.map((keyword, i) => (
          <meta property="article:tag" content={keyword.name} key={i} />
        ))}
        {author.facebook && <meta property="article:author" content={author.facebook} />}
        <meta name="twitter:title" content={post.twitter_title || title} />
        <meta name="twitter:description" content={post.twitter_description || description} />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={author.name} />
        <script type="application/ld+json">{JSON.stringify(jsonLd, undefined, 4)}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={shareImage} />
        <meta property="og:image" content={shareImage} />
      </Helmet>
      <FullArticle {...article} />
    </BaseLayout>
  );
};

export default Post;

export const postQuery = graphql`
  query getPost($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
      childHtmlRehype {
        html
        tableOfContents
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
