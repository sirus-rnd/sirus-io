import React from 'react';
import 'twin.macro';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import TabbedContent, { ContentItem } from '../components/tabbed-content';
import BaseLayout from '../layouts/base';
import { GetProductQuery } from '../graphql-types';
import { RichText } from 'prismic-reactjs';

const Product: React.FC<PageProps<GetProductQuery>> = ({ data, location }) => {
  const pageInfo = data.allPrismicProduct.edges[0].node;
  const pageData = pageInfo.data;
  const items = pageData?.features?.map(
    item =>
      ({
        title: item?.name as string,
        subtitle: item?.type as string,
        content: item?.information,
        image: item?.image,
      } as ContentItem),
  ) as ContentItem[];

  // SEO data
  const siteMeta = data.site?.siteMetadata;
  const canonical = `${siteMeta.url}/${location.pathname}`;
  const title = pageData.title || siteMeta.title;
  const description = pageData.description?.text || siteMeta.description;
  const shareImage = items?.length > 0 ? items[0]?.image?.url : siteMeta.image;
  const publisherLogo = `${siteMeta.url}/${siteMeta.logo}`;
  const datePublished = pageInfo.first_publication_date;
  const dateModified = pageInfo.last_publication_date;

  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': `Product`,
    brand: siteMeta.title,
    logo: publisherLogo,
    name: title,
    description,
    image: shareImage,
  };

  return (
    <BaseLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        {pageInfo.tags.map((keyword, i) => (
          <meta property="article:tag" content={keyword} key={i} />
        ))}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd, undefined, 4)}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={shareImage} />
        <meta property="og:image" content={shareImage} />
      </Helmet>
      <section tw="py-16 px-8">
        <div tw="container">
          <h3 tw="text-center mb-8">{pageData?.title}</h3>
          <div tw="mb-16 grid grid-cols-1 lg:grid-cols-4">
            <div tw="lg:col-start-2 lg:col-end-4">
              <RichText tw="mb-16" render={pageData.description?.raw} />
            </div>
          </div>
          <TabbedContent items={items}></TabbedContent>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Product;

export const pageQuery = graphql`
  query getProduct($uid: String!) {
    allPrismicProduct(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          first_publication_date
          last_publication_date
          tags
          data {
            title
            description {
              raw
              text
            }
            features {
              image {
                alt
                fluid(maxWidth: 500, maxHeight: 500) {
                  ...PrismicImageFluidFields
                }
              }
              name
              type
              information {
                raw
                text
              }
              link {
                url
              }
            }
          }
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
