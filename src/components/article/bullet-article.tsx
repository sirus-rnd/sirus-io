import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { Article, ArticlePublishingInfo, ArticleTags, PrimaryLink } from './article';

export type BulletArticleProps = Article;

const BulletArticle: React.FC<BulletArticleProps> = props => {
  return (
    <article tw="flex">
      <div
        tw="hidden md:block md:flex-none rounded-full mr-8"
        css={css`
          width: 200px;
          height: 200px;
          background-image: url('${props.image}');
          background-size: cover;
        `}
      ></div>
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
        <p>{props.excerpt}</p>
        <PrimaryLink to={`/artikel/${props.slug}`}>lebih lanjut...</PrimaryLink>
      </div>
    </article>
  );
};

export default BulletArticle;
