import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { Article, ArticlePublishingInfo, ArticleTags, PrimaryLink } from './article';

export type SimpleArticleProps = Article;

const SimpleArticle: React.FC<SimpleArticleProps> = props => {
  return (
    <article>
      <ArticleTags tw="mb-4" tags={props.tags} />
      <Link tw="text-primary no-underline" to={`/artikel/${props.slug}`}>
        <h1>{props.title}</h1>
      </Link>
      <p>{props.excerpt}</p>
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
    </article>
  );
};

export default SimpleArticle;
