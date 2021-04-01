import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import CaptionedLogo from '../components/captioned-logo';
import { CSSTransition } from 'react-transition-group';

interface HeaderProps {
  dark?: boolean;
}

interface HeaderState {
  menuMobileActive?: boolean;
}

const darkStyle = css`
  min-width: 350px;
  position: absolute;
  bottom: -213px;
  z-index: 9999;
  @media (max-width: 1024px) {
    bottom: -150px;
  }
`;

const lightStyle = css`
  position: relative;
`;

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    const dark = this.props?.dark;
    const menuMobileActive = this.state?.menuMobileActive;
    return (
      <header
        tw="flex justify-center"
        css={css`
          background: ${dark ? 'transparent' : 'white'};
          position: relative;
        `}
      >
        <div
          tw="w-full"
          css={css`
            ${dark ? darkStyle : lightStyle}
          `}
        >
          <div
            tw="flex my-6 lg:my-12 justify-center"
            css={css`
              top: 0;
            `}
          >
            <CaptionedLogo color="#fe553a" />
          </div>
          <h4
            tw="lg:hidden text-center my-4 text-lg"
            css={css`
              color: ${dark ? 'white' : 'black'};
            `}
            onClick={() => {
              this.setState({
                menuMobileActive: !this.state?.menuMobileActive,
              });
            }}
            onMouseLeave={() => {
              this.setState({
                menuMobileActive: false,
              });
            }}
          >
            Menu
          </h4>
          <nav
            tw="lg:flex lg:justify-center lg:items-center mb-8"
            css={css`
              a {
                color: ${dark ? '#999' : '#777'};
                text-align: center;
                text-decoration: none;
                margin: 0 10px;
                font-size: 18px;
                font-family: 'Poppins';
                font-weight: 700;
                display: block;
                &:hover,
                &.active {
                  color: ${dark ? 'white' : 'black'};
                }
              }
              @media (max-width: 1024px) {
                background: ${dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'};
                position: absolute;
                z-index: 9999;
                width: 100%;
                padding: 16px 0;
                opacity: ${menuMobileActive ? '1' : '0'};
                transform: ${menuMobileActive ? 'translateY(0)' : 'translateY(-20px)'};
                transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                a {
                  padding: 6px 0;
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
  }
}

export default Header;
