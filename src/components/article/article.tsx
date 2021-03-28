import React, { CSSProperties } from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { DateTime } from 'luxon';
import { Link } from 'gatsby';

export interface Article {
  tags: ArticleAtribution[];
  title: string;
  released: Date;
  author: ArticleAtribution;
  excerpt: string;
  slug: string;
  image?: string;
}

export interface ArticleAtribution {
  name: string;
  slug: string;
}

export const linkStyle = css`
  font-weight: normal;
  color: #777777;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: black;
    }
  }
`;

export const PrimaryLink = tw(Link)`
  text-primary font-bold no-underline
`;

export interface ArticlePublishingInfoProps {
  released: Date;
  author: ArticleAtribution;
  style?: CSSProperties;
  className?: string;
}

export const ArticlePublishingInfo: React.FC<ArticlePublishingInfoProps> = ({
  released,
  author,
  style,
  className,
}) => {
  return (
    <h5 className={className} style={style} css={[linkStyle]}>
      {DateTime.fromJSDate(released).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}, oleh{' '}
      <Link to={`/penulis/${author.slug}`}>{author.name}</Link>
    </h5>
  );
};

export interface ArticleTagsProps {
  tags: ArticleAtribution[];
  style?: CSSProperties;
  className?: string;
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ tags, style, className }) => {
  return (
    <h4 className={className} style={style} css={[linkStyle]}>
      {tags.map(tag => (
        <Link key={tag.slug} to={`/kategori/${tag.slug}`}>{tag.name}</Link>
      ))}
    </h4>
  );
};
