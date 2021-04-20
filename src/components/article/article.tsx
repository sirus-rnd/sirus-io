import React, { CSSProperties } from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { DateTime } from 'luxon';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

export interface Article {
  tags: ArticleAtribution[];
  title: string;
  released: Date;
  author: ArticleAtribution;
  excerpt: string;
  slug: string;
  image?: FluidObject;
  style?: React.CSSProperties;
  className?: string;
}

export interface ArticleAtribution {
  name: string;
  slug: string;
  image?: FluidObject;
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

export const linkDarkStyle = css`
  font-weight: normal;
  color: #cccccc;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: white;
    }
  }
`;

export const PrimaryLink = tw(Link)`
  text-primary font-bold no-underline
`;

export interface ArticlePublishingInfoProps {
  released: Date;
  author: ArticleAtribution;
  dark?: boolean;
  style?: CSSProperties;
  className?: string;
}

const profilePictureStyle = css`
  ${tw`flex-none rounded-full mr-4`}
  background: grey;
  width: 40px;
  height: 40px;
`;

export const ArticlePublishingInfo: React.FC<ArticlePublishingInfoProps> = ({
  released,
  author,
  dark,
  style,
  className,
}) => {
  return (
    <div className={className} style={style} tw="flex items-center">
      {author?.image ? (
        <Img fluid={author?.image as FluidObject} css={profilePictureStyle} />
      ) : (
        <div css={profilePictureStyle}></div>
      )}
      <h5 tw="mb-0" css={[dark ? linkDarkStyle : linkStyle]}>
        Dirilis {DateTime.fromJSDate(released).setLocale('id').toLocaleString(DateTime.DATE_HUGE)}
        <br />
        oleh <Link to={`/penulis/${author.slug}`}>{author.name}</Link>
      </h5>
    </div>
  );
};

export interface ArticleTagsProps {
  tags: ArticleAtribution[];
  dark?: boolean;
  style?: CSSProperties;
  className?: string;
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ tags, dark, style, className }) => {
  return (
    <h4 className={className} style={style} css={[dark ? linkDarkStyle : linkStyle]}>
      {tags.map(tag => (
        <Link key={tag.slug} to={`/kategori/${tag.slug}`}>
          {tag.name + ' '}
        </Link>
      ))}
    </h4>
  );
};
