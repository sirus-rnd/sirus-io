import React from 'react';
import 'twin.macro';
import { graphql, Link, StaticQuery } from 'gatsby';
import Obfuscate from 'react-obfuscate';
import { css } from '@emotion/react';
import { DateTime } from 'luxon';
import { RichText } from 'prismic-reactjs';
import CaptionedLogo from '../components/captioned-logo';
import { GetLayoutDataQuery } from '../graphql-types';

interface FooterProps {
  data?: GetLayoutDataQuery;
}

const FooterComp: React.FC<FooterProps> = ({ data }) => {
  const contactData = data.prismicContact.data;

  return (
    <footer
      tw="px-8 py-16"
      css={css`
        background: #ececec;
        color: #777777;
      `}
    >
      <div tw="container grid grid-cols-1 md:grid-cols-2">
        <div>
          <nav
            tw="flex mb-16"
            css={css`
              a {
                color: #777;
                text-decoration: none;
                margin-right: 10px;
                font-size: 18px;
                font-family: 'Poppins';
                &:hover,
                &.active {
                  color: black;
                }
              }
            `}
          >
            <Link to="/ketentuan-privasi" activeClassName="active">
              ketentuan privasi
            </Link>
          </nav>
          <address tw="not-italic text-sm">
            &copy; 2019-{DateTime.local().year} PT Sirus Teknologi Utama <br />
            <RichText render={contactData?.address?.raw} />
            Nomor telepon:{' '}
            <Obfuscate tw="text-gray-500 no-underline" tel={contactData?.phone_number as string} /> |
            Email:{' '}
            <Obfuscate tw="text-gray-500 no-underline" email={contactData?.contact_email as string} />
          </address>
        </div>
        <div>
          <div tw="mt-16 md:mt-0 flex justify-center md:justify-end">
            <CaptionedLogo color="#777777" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export interface BaseLayoutQueryProps {
  dark?: boolean;
}

const pageQuery = graphql`
  query getLayoutData {
    prismicContact {
      data {
        phone_number
        contact_email
        address {
          raw
        }
        address_geolocation {
          latitude
          longitude
        }
      }
    }
  }
`;

const Footer: React.FC<BaseLayoutQueryProps> = () => {
  return <StaticQuery query={pageQuery} render={data => <FooterComp data={data} />} />;
};

export default Footer;
