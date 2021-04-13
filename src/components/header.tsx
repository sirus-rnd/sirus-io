import React from 'react';
import tw from 'twin.macro';
import { CSSTransition } from 'react-transition-group';
import { graphql, Link, StaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import CaptionedLogo from '../components/captioned-logo';
import { ReactComponent as Logo } from '../assets/sirus-logo.svg';
import { GetHeaderDataQuery } from '../graphql-types';
import { linkToUrl } from './utils/menu';

interface HeaderProps {
  dark?: boolean;
}

interface HeaderCompProps {
  dark?: boolean;
  data?: GetHeaderDataQuery;
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

const menuToggleDarkStyle = css`
  font-size: 32px;
  cursor: pointer;
  height: 1em;
  color: #999;
  &:hover {
    color: white;
  }
`;
const menuToggleLightStyle = css`
  font-size: 32px;
  cursor: pointer;
  height: 1em;
  color: #777;
  &:hover {
    color: black;
  }
`;

class HeaderComp extends React.Component<HeaderCompProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.setState({
      menuMobileActive: false,
    });
  }

  render() {
    const dark = this.props?.dark;
    const baseUrl = this.props?.data?.site?.siteMetadata?.url;
    const menus = this.props?.data?.prismicMenu?.data?.menus?.map(m => ({
      label: m.label,
      url: linkToUrl(baseUrl, m.link),
    }));
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
              @media (max-width: 1024px) {
                display: none;
              }
            `}
          >
            <CaptionedLogo color="#fe553a" />
          </div>
          <div
            css={css`
              ${tw`flex items-center`}
              position: fixed;
              z-index: 9999;
              width: 100%;
              padding: 16px 24px;
              top: 0;
              background: ${dark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.8)'};
              backdrop-filter: blur(4px);
              @media (min-width: 1024px) {
                display: none;
              }
            `}
          >
            {menuMobileActive ? (
              <div
                className="icon icon-x"
                tw="flex-none"
                onClick={() => {
                  this.setState({
                    menuMobileActive: false,
                  });
                }}
                css={dark ? menuToggleDarkStyle : menuToggleLightStyle}
              ></div>
            ) : (
              <div
                className="icon icon-menu"
                tw="flex-none"
                onClick={() => {
                  this.setState({
                    menuMobileActive: true,
                  });
                }}
                css={dark ? menuToggleDarkStyle : menuToggleLightStyle}
              ></div>
            )}
            <div tw="flex-grow"></div>
            <Link to="/" tw="flex items-center no-underline">
              <Logo
                tw="flex-none"
                width="32px"
                height="29px"
                css={css`
                  fill: #fe553a;
                `}
              />
              <h2
                tw="text-primary"
                css={css`
                  font-weight: normal;
                  font-size: 14px;
                  margin: 0;
                  margin-left: 8px;
                `}
              >
                sirus
                <br />
                teknologi
              </h2>
            </Link>
          </div>
          <CSSTransition in={menuMobileActive} timeout={200} classNames="fade" unmountOnExit>
            <div
              onClick={() => {
                this.setState({
                  menuMobileActive: false,
                });
              }}
              css={css`
                background: ${dark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'};
                backdrop-filter: blur(2px);
                position: fixed;
                z-index: 9998;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
              `}
            ></div>
          </CSSTransition>
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
              .close-menu {
                display: none;
              }
              @media (max-width: 1024px) {
                background: ${dark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.8)'};
                position: fixed;
                z-index: 9999;
                width: 300px;
                height: 100vh;
                box-sizing: border-box;
                left: ${menuMobileActive ? '0' : '-300px'};
                transition: left 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
                top: 64px;
                padding: 16px 8px;
                a {
                  margin: 0;
                  padding: 6px 16px;
                  text-align: left;
                }
              }
            `}
          >
            {menus.map((m, i) => (
              <Link key={i} to={m.url} activeClassName="active">
                {m.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}

const headerQuery = graphql`
  query getHeaderData {
    site {
      siteMetadata {
        ...SiteMetadataFields
      }
    }
    prismicMenu(uid: { eq: "header" }) {
      ...PrismicMenuField
    }
  }
`;

const Header: React.FC<HeaderProps> = props => {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => <HeaderComp dark={props.dark} data={data} />}
    />
  );
};

export default Header;
