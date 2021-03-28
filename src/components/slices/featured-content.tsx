import React from 'react';
import 'twin.macro';
import { css } from '@emotion/react';
import { PrismicHomepageBodyFeaturedContents } from '../../graphql-types';
import TabbedContent, { ContentItem } from '../tabbed-content';

export interface FeaturedContentSliceProps {
  data: PrismicHomepageBodyFeaturedContents;
}

const FeaturedContentSlice: React.FC<FeaturedContentSliceProps> = ({ data }) => {
  const items = data?.items?.map(
    item =>
      ({
        title: item?.name as string,
        content: item?.information,
        image: item?.image,
      } as ContentItem),
  ) as ContentItem[];
  return (
    <section
      tw="flex items-center py-16 px-8"
      css={css`
        min-height: 100vh;
      `}
    >
      <div tw="container">
        <h3 tw="text-center mb-16">{data?.primary?.title}</h3>
        <TabbedContent
          items={items}
          rightNav={data.primary?.navigation_position as boolean}
        ></TabbedContent>
      </div>
    </section>
  );
};

export default FeaturedContentSlice;
