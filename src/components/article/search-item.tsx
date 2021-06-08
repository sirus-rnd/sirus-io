import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { ArticleAtribution, ArticlePublishingInfo, ArticleTags, PrimaryLink } from './article';

export interface SearchItemProps {
  id?: string;
  image?: string;
  slug: string;
  title: string;
  tags: ArticleAtribution[];
  author: ArticleAtribution;
  excerpt: string;
  released: Date;
  style?: React.CSSProperties;
  className?: string;
};

const articleImageStyle = css`
  ${tw`hidden md:block md:flex-none rounded-full mr-8`}
  background: grey;
  width: 200px;
  height: 200px;
`;

const SearchItem: React.FC<SearchItemProps> = props => {
  return (
    <article tw="flex">
      {props.image ? (
        <img src={props.image} css={articleImageStyle} />
      ) : (
        <div css={articleImageStyle}></div>
      )}
      <div tw="flex-1">
        <ArticleTags tw="mb-4" tags={props.tags} />
        <Link tw="text-primary no-underline" to={`/artikel/${props.slug}`}>
          <h1>{props.title}</h1>
        </Link>
        <p>{props.excerpt}...</p>
        <div tw="grid grid-cols-1 lg:grid-cols-2">
          <ArticlePublishingInfo
            css={css`
              line-height: 1.4em;
            `}
            author={props.author}
            released={props.released}
          />
          <div tw="lg:(text-right mt-0) mt-4">
            <PrimaryLink to={`/artikel/${props.slug}`}>baca lebih lanjut...</PrimaryLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SearchItem;
