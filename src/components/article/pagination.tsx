import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const PageLink = tw(Link)`text-primary font-bold cursor-pointer no-underline`;

export interface PaginationProps {
  pageContext: PageContext;
}

export interface PageContext {
  slug?: string;
  limit?: number;
  skip?: number;
  previousPagePath?: string;
  nextPagePath?: string;
  humanPageNumber?: number;
  numberOfPages?: number;
  prevPageNumber?: number;
  nextPageNumber?: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageContext }) => {
  const { previousPagePath, numberOfPages, nextPagePath, humanPageNumber } = pageContext;
  return (
    <div tw="flex justify-between items-center my-16">
      {previousPagePath && <PageLink to={previousPagePath}>&lt; halaman sebelumnya</PageLink>}
      <h4 tw="m-0">
        halaman {humanPageNumber} dari {numberOfPages}
      </h4>
      {nextPagePath && <PageLink to={nextPagePath}>halaman selanjutnya &gt;</PageLink>}
    </div>
  );
};

export default Pagination;
