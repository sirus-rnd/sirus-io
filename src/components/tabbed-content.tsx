import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
import { RichText } from 'prismic-reactjs';
import { PrismicImageType, PrismicStructuredTextType } from '../graphql-types';
import Img, { FluidObject } from 'gatsby-image';
import { css } from '@emotion/react';

export interface TabbedContentProp {
  items: ContentItem[];
  rightNav?: boolean;
}

export interface ContentItem {
  title?: string;
  subtitle?: string;
  content?: PrismicStructuredTextType;
  image?: PrismicImageType;
}

export interface TabbedContentState {
  activeIdx: number;
}

class TabbedContent extends React.Component<TabbedContentProp, TabbedContentState> {
  constructor(props: PropsWithChildren<TabbedContentProp>) {
    super(props);
    this.state = {
      activeIdx: 0,
    };
  }

  activateItem(idx: number) {
    this.setState({
      activeIdx: idx,
    });
  }

  render() {
    const activeIdx = this.state.activeIdx;
    const items = this.props.items;
    const activeItem = items[activeIdx];

    return (
      <div tw="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          css={css`
            ${this.props.rightNav && rightNavStyle}
          `}
        >
          {this.props.items?.map((item, idx) => {
            return (
              <div tw="cursor-pointer" key={item.title} onClick={() => this.activateItem(idx)}>
                <h2
                  css={css`
                    ${idx === activeIdx ? activeTabStyle : inActiveTabStyle}
                  `}
                >
                  {item.title}
                </h2>
                <p>{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div
          css={css`
            ${this.props.rightNav && rightContentStyle}
          `}
        >
          <h1 tw="text-primary">{activeItem?.title}</h1>
          <div>
            <RichText render={activeItem?.content?.raw} />
          </div>
        </div>

        <div
          css={css`
            ${this.props.rightNav && rightImageStyle}
          `}
        >
          <Img
            css={css`
              width: 100%;
            `}
            fluid={activeItem?.image?.fluid as FluidObject}
            alt={activeItem?.image?.alt as string}
          />
        </div>
      </div>
    );
  }
}

export default TabbedContent;

const activeTabStyle = tw`mb-2 text-primary`;
const inActiveTabStyle = tw`mb-2 text-gray-500 hover:text-black`;
const rightNavStyle = tw`col-start-3 row-start-1`;
const rightImageStyle = tw`col-start-1 row-start-1`;
const rightContentStyle = tw`col-start-2 row-start-1`;
