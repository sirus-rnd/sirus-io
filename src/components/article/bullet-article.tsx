import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { Article, ArticlePublishingInfo, ArticleTags, PrimaryLink } from './article';
import Img, { FluidObject } from 'gatsby-image';

export type BulletArticleProps = Article;

const BulletArticle: React.FC<BulletArticleProps> = props => {
  return (
    <article tw="flex">
      <Img
        tw="hidden md:block md:flex-none rounded-full mr-8"
        fluid={props?.image as FluidObject}
        css={css`
          width: 200px;
          height: 200px;
        `}
      />
      <div tw="flex-1">
        <div tw="grid grid-cols-2 justify-between content-center mb-2">
          <ArticleTags tw="mb-0" tags={props.tags} />
          <ArticlePublishingInfo
            tw="text-right mb-0"
            author={props.author}
            released={props.released}
          />
        </div>
        <Link tw="text-primary no-underline" to={`/artikel/${props.slug}`}>
          <h1>{props.title}</h1>
        </Link>
        <p>{props.excerpt}...</p>
        <PrimaryLink to={`/artikel/${props.slug}`}>lebih lanjut...</PrimaryLink>
      </div>
    </article>
  );
};

export default BulletArticle;
