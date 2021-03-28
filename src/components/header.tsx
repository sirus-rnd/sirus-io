import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import CaptionedLogo from '../components/captioned-logo';

interface HeaderProps {
  dark?: boolean;
}

const darkStyle = css`
  min-width: 350px;
  position: absolute;
  bottom: -213px;
  z-index: 9999;
`;

const Header: React.FC<HeaderProps> = ({ dark = false }) => {
  return (
    <header
        tw="flex justify-center"
        css={css`
          background: ${dark ? 'transparent' : 'white'};
          position: relative;
        `}
      >
        <div
          css={css`
            ${dark ? darkStyle : ''}
          `}
        >
          <div tw="flex my-12 justify-center">
            <CaptionedLogo color="#fe553a" />
          </div>
          <nav
            tw="flex justify-center items-center mb-8"
            css={css`
              a {
                color: ${dark ? '#999' : '#777'};
                text-decoration: none;
                margin: 0 10px;
                font-size: 18px;
                font-family: 'Poppins';
                font-weight: 700;
                &:hover,
                &.active {
                  color: ${dark ? 'white' : 'black'};
                }
              }
            `}
          >
            <Link to="/tentang-kami" activeClassName="active">
              tentang kami
            </Link>
            <Link to="/produk-kami" activeClassName="active">
              produk
            </Link>
            <Link to="/layanan-kami" activeClassName="active">
              layanan
            </Link>
            <Link to="/artikel" activeClassName="active">
              artikel
            </Link>
          </nav>
        </div>
      </header>
  );
};

export default Header;
