import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { css } from '@emotion/react';
import 'twin.macro';
import { Article, ArticlePublishingInfo, ArticleTags } from './article';

export interface FullArticleProps extends Article {
  content: string;
  toc: any;
  image?: FluidObject;
}

const FullArticle: React.FC<FullArticleProps> = props => {
  return (
    <article>
      <header
        css={css`
          position: relative;
          overflow: hidden;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          `}
        >
          {props.image ? <Img fluid={props.image} /> : <div tw="bg-gray-200"></div>}
        </div>
        <div
          tw="flex items-end"
          css={css`
            padding-top: 212px;
            background: rgba(0, 0, 0, 0.5);
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 0.4) 100%
            );
            bottom: 0;
            width: 100%;
            height: 100%;
          `}
        >
          <div tw="container grid grid-cols-1 md:grid-cols-5">
            <div tw="md:col-span-3 md:col-start-2 px-8 md:px-0 my-12">
              <ArticleTags dark={true} tw="text-lg" tags={props.tags} />
              <h1 tw="text-primary lg:text-7xl" title={props.title}>
                {props.title}
              </h1>
              <ArticlePublishingInfo
                dark={true}
                tw="text-base"
                author={props.author}
                released={props.released}
              />
            </div>
          </div>
        </div>
      </header>

      <section tw="py-16 px-8">
        <div tw="container grid grid-cols-1 md:grid-cols-5">
          <div tw="md:col-start-2 md:col-end-5">
            <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FullArticle;
