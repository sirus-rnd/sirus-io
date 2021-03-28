import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { ReactComponent as Logo } from '../assets/sirus-logo.svg';

const CaptionedLogo: React.FC<{ color: string }> = ({ color }) => (
  <Link to="/" tw="flex items-center no-underline">
    <Logo
      width="64px"
      height="58px"
      css={css`
        fill: ${color};
      `}
    />
    <svg
      css={css`
        stroke: ${color};
        margin: 0 12px;
      `}
      viewBox="0 0 100 4"
      height="4"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="2" x2="100" y2="2" strokeWidth="2px"></line>
    </svg>
    <h2
      css={css`
        color: ${color};
        font-weight: normal;
        font-size: 18px;
        margin: 0;
      `}
    >
      sirus
      <br />
      teknologi
    </h2>
  </Link>
);

export default CaptionedLogo;
