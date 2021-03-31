import React from 'react';
import 'twin.macro';
import { css } from '@emotion/react';
import Img, { FluidObject } from 'gatsby-image';

export interface ContentBannerProps {
  subheader: string;
  title: string;
  information: string;
  image?: FluidObject;
}

const ContentBanner: React.FC<ContentBannerProps> = props => {
  return (
    <section
      css={css`
        position: relative;
      `}
    >
      <Img
        tw="mb-6"
        fluid={props.image as FluidObject}
        css={css`
          width: 100%;
          height: 400px;
        `}
      />
      <div
        tw="py-16 px-8 text-white flex items-center"
        css={css`
          background: rgba(0, 0, 0, 0.5);
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
        `}
      >
        <div tw="container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 tw="text-white">{props.subheader}</h4>
            <h1
              tw="text-primary text-6xl"
            >
              {props.title}
            </h1>
            <p
              css={css`
                max-height: 120px;
                display: block;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
              `}
            >
              {props.information}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBanner;
