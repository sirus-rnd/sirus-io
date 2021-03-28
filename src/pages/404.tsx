import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { ReactComponent as Logo } from '../assets/sirus-logo.svg';

const BaseLayout: React.FC = () => (
  <div>
    <section
      tw="flex justify-center items-center text-center"
      css={css`
        background: #373737;
        color: white;
        height: 100vh;
      `}
    >
      <div>
        <Logo
          tw="mb-8"
          width="64px"
          height="58px"
          css={css`
            fill: #777;
          `}
        />
        <h2>Halaman Tidak Ditemukan</h2>
        <Link
          css={css`
            color: #777;
            text-decoration: none;
            font-size: 18px;
            font-family: 'Poppins';
            font-weight: 700;
            &:hover {
              color: white;
            }
          `}
          to="/"
        >
          kembali ke beranda
        </Link>
      </div>
    </section>
  </div>
);

export default BaseLayout;
