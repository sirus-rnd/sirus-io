import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { Separator } from './scaffolds';

export interface SidenavProps {
  title: string;
  links: NavItem[];
}

export interface NavItem {
  caption: string;
  url: string;
  subItems?: NavItem[];
}

const SubNav: React.FC<{ items: NavItem[] }> = props => {
  return (
    <ul>
      {props.items.map(link => (
        <li>
          <Link to={link.url}>{link.caption}</Link>
          {link.subItems?.length ? <SubNav items={link.subItems as NavItem[]} /> : ''}
        </li>
      ))}
    </ul>
  );
};

const Sidenav: React.FC<SidenavProps> = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <Separator />
      <ul
        css={css`
          li {
            list-style: none;
            line-height: 2em;
            &.active {
              a {
                ${tw`text-primary`}
                &:hover {
                  color: inherit;
                }
              }
            }
          }
          ul {
            li {
              margin-left: 16px;
            }
          }
          a {
            font-weight: bold;
            color: #777;
            text-decoration: none;
            :hover {
              color: #000;
            }
          }
        `}
      >
        {props.links.map(link => (
          <li>
            <Link to={link.url}>{link.caption}</Link>
            {link.subItems?.length ? <SubNav items={link.subItems as NavItem[]} /> : ''}
          </li>
        ))}
      </ul>
      <Separator />
    </div>
  );
};

export default Sidenav;
