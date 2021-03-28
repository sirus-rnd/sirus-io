import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { Article, ArticlePublishingInfo, ArticleTags, PrimaryLink } from './article';

export type SimpleArticleProps = Article;

const SimpleArticle: React.FC<SimpleArticleProps> = props => {
  return (
    <article>
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
    </article>
  );
};

export default SimpleArticle;
