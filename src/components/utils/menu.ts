import { PrismicLinkType } from '../../graphql-types';

export function linkToUrl(baseUrl: string, link: PrismicLinkType): string {
  switch (link?.link_type) {
    case 'Document':
      return `/${link?.uid}`;
    case 'Web':
      if (link?.url?.includes(baseUrl)) {
        return link?.url?.replace(baseUrl, '');
      }
      if (link?.url?.includes('///')) {
        return link?.url?.replace(/https:\/\/|http:\/\//, '');
      }
      return link?.url;
    default:
      return null;
  }
}

export interface Menu {
  label: string;
  url: string;
}
