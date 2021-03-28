import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { Article, ArticlePublishingInfo, ArticleTags, PrimaryLink } from './article';

export type FeturedArticleProps = Article;

const FeaturedArticle: React.FC<FeturedArticleProps> = props => {
  return (
    <article>
      <div tw="grid grid-cols-2 justify-between content-center mb-3">
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
      <div
        tw="mb-6"
        css={css`
          width: 100%;
          height: 300px;
          background-image: url('${props.image}');
          background-size: cover;
        `}
      ></div>
      <p>{props.excerpt}</p>
      <PrimaryLink to={`/artikel/${props.slug}`}>lebih lanjut...</PrimaryLink>
    </article>
  );
};

export default FeaturedArticle;
