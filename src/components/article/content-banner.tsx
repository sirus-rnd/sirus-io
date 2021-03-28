import React from 'react';
import 'twin.macro';
import { css } from '@emotion/react';
import { ArticleAtribution, ArticleTags } from './article';

export interface ContentBannerProps {
  tags: ArticleAtribution[];
  title: string;
  information: string;
  image?: string;
}

const ContentBanner: React.FC<ContentBannerProps> = props => {
  return (
    <section
      css={css`
        background-image: url('${props.image}');
        background-size: cover;
      `}
    >
      <div
        tw="py-16 px-8"
        css={css`
          background: rgba(0, 0, 0, 0.5);
          color: white;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
        `}
      >
        <div tw="container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ArticleTags tags={props.tags} />
            <h1 tw="text-primary text-6xl">{props.title}</h1>
            <p>{props.information}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBanner;
