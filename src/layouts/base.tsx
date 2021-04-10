import React from 'react';
import { Helmet } from 'react-helmet-async';
import { css } from '@emotion/react';
import 'twin.macro';
import Header from '../components/header';
import Footer from '../components/footer';

interface BaseProps {
  dark?: boolean;
}

class BaseLayout extends React.Component<BaseProps> {
  render() {
    const { dark, children } = this.props;
    return (
      <div>
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="/styles/fonts.css" rel="stylesheet" />
        </Helmet>
        <Header dark={dark} />
        <div css={css`
          @media (max-width: 1024px) {
            margin-top: 64px;
          }
        `}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
