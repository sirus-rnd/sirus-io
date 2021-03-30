import React from 'react';
import 'twin.macro';
import { Article, ArticlePublishingInfo, ArticleTags } from './article';

export interface FullArticleProps extends Article {
  content: string;
}

const FullArticle: React.FC<FullArticleProps> = props => {
  return (
    <article>
      <header>
        <ArticleTags tw="text-lg" tags={props.tags} />
        <h1 tw="text-primary lg:text-7xl">{props.title}</h1>
        <ArticlePublishingInfo tw="text-base" author={props.author} released={props.released} />
      </header>
      <section dangerouslySetInnerHTML={{ __html: props.content }}></section>
    </article>
  );
};

export default FullArticle;
