import { graphql } from 'gatsby';

// site metadata
export const siteMetadataFields = graphql`
  fragment SiteMetadataFields on SiteSiteMetadata {
    title
    description
    url
    siteUrl
    image
    logo
  }
`;

// used form image retrieve from prismic
export const prismicImageField = graphql`
  fragment PrismicImageFields on PrismicImageInterface {
    alt
    copyright
    dimensions {
      width
      height
    }
    fixed {
      ...PrismicImageFixedFields
    }
    fluid {
      ...PrismicImageFluidFields
    }
  }
`;

export const prismicImageFixedField = graphql`
  fragment PrismicImageFixedFields on PrismicImageFixedType {
    base64
    src
    srcSet
    srcWebp
    srcSetWebp
    width
    height
  }
`;

export const prismicImageFluidField = graphql`
  fragment PrismicImageFluidFields on PrismicImageFluidType {
    base64
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
    aspectRatio
  }
`;

export const gatsbyImageFluidField = graphql`
  fragment ImageSharpFluidFields on ImageSharpFluid {
    base64
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
    aspectRatio
  }
`;

// Used for tag archive pages
export const ghostTagFields = graphql`
  fragment GhostTagFields on GhostTag {
    slug
    name
    visibility
    feature_image
    description
    meta_title
    meta_description
    featureImageSharp {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...ImageSharpFluidFields
        }
      }
    }
  }
`;

// Used for author pages
export const ghostAuthorFields = graphql`
  fragment GhostAuthorFields on GhostAuthor {
    slug
    name
    bio
    cover_image
    profile_image
    location
    website
    twitter
    facebook
    coverImageSharp {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...ImageSharpFluidFields
        }
      }
    }
    profileImageSharp {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...ImageSharpFluidFields
        }
      }
    }
  }
`;

// Used for single posts
export const ghostPostFields = graphql`
  fragment GhostPostFields on GhostPost {
    # Main fields
    id
    title
    slug
    featured
    feature_image
    excerpt
    custom_excerpt
    visibility
    featureImageSharp {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...ImageSharpFluidFields
        }
      }
    }

    # Dates formatted
    created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
    published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
    updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")

    # Dates unformatted
    created_at
    published_at
    updated_at

    # SEO
    meta_title
    meta_description
    og_description
    og_image
    og_title
    twitter_description
    twitter_image
    twitter_title

    # Authors
    authors {
      name
      slug
      bio
      # email
      profileImageSharp {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...ImageSharpFluidFields
          }
        }
      }
      twitter
      facebook
      website
    }
    primary_author {
      name
      slug
      bio
      # email
      profileImageSharp {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...ImageSharpFluidFields
          }
        }
      }
      twitter
      facebook
      website
    }

    # Tags
    primary_tag {
      name
      slug
      description
      feature_image
      meta_description
      meta_title
      visibility
    }
    tags {
      name
      slug
      description
      feature_image
      meta_description
      meta_title
      visibility
    }

    # Content
    plaintext
    html

    # Additional fields
    url
    canonical_url
    uuid
    page
    codeinjection_foot
    codeinjection_head
    codeinjection_styles
    comment_id
    reading_time
  }
`;

// Used for single pages
export const ghostPageFields = graphql`
  fragment GhostPageFields on GhostPage {
    # Main fields
    title
    slug
    featured
    feature_image
    excerpt
    custom_excerpt
    visibility

    # Dates formatted
    created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
    published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
    updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")

    # Dates unformatted
    created_at
    published_at
    updated_at

    # SEO
    meta_title
    meta_description
    og_description
    og_image
    og_title
    twitter_description
    twitter_image
    twitter_title

    # Authors
    authors {
      name
      slug
      bio
      # email
      profile_image
      twitter
      facebook
      website
    }
    primary_author {
      name
      slug
      bio
      # email
      profile_image
      twitter
      facebook
      website
    }

    # Tags
    primary_tag {
      name
      slug
      description
      feature_image
      meta_description
      meta_title
      visibility
    }
    tags {
      name
      slug
      description
      feature_image
      meta_description
      meta_title
      visibility
    }

    # Content
    plaintext
    html

    # Additional fields
    url
    canonical_url
    uuid
    page
    codeinjection_foot
    codeinjection_head
    codeinjection_styles
    comment_id
    reading_time
  }
`;

// Used for settings
export const ghostSettingsFields = graphql`
  fragment GhostSettingsFields on GhostSettings {
    title
    description
    logo
    icon
    cover_image
    facebook
    twitter
    lang
    timezone
    codeinjection_head
    codeinjection_foot
    codeinjection_styles
    navigation {
      label
      url
    }
    coverImageSharp {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...ImageSharpFluidFields
        }
      }
    }
  }
`;
