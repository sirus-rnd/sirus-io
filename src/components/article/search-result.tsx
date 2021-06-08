import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import tw from 'twin.macro';
import { times } from 'lodash';
import { Link } from 'gatsby';
import SearchItem, { SearchItemProps } from './search-item';
import { Separator } from '../scaffolds';

interface IndexDoc {
  id?: string;
  title?: string;
  image?: string;
  slug?: string;
  excerpt?: string;
  primary_author?: {
    name?: string;
    slug?: string;
  };
  tags?: {
    name?: string;
    slug?: string;
  }[];
  published_at?: Date;
}

const PageLink = tw(Link)`text-primary font-bold cursor-pointer no-underline mr-2`;

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);
const searchIndex = searchClient.initIndex('article_post');

interface SearchProps {
  query?: string;
  page?: number;
  style?: React.CSSProperties;
  className?: string;
}

interface SearchState {
  hits?: SearchItemProps[];
  processingTimeMs?: number;
  query?: string;
  page?: number;
  numberOfPages?: number;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      processingTimeMs: 0,
      query: props.query,
      page: props.page,
      numberOfPages: 0,
      hits: [],
    };
  }

  async componentDidMount() {
    this.searchArticle();
  }

  componentDidUpdate(prevProps: SearchProps) {
    if (prevProps.query !== this.props.query || prevProps.page !== this.props.page) {
      this.setState({
        query: this.props.query,
        page: this.props.page,
      });
      this.searchArticle();
    }
  }

  async searchArticle() {
    try {
      const resp = await searchIndex.search<IndexDoc>(this.props?.query, {
        page: this.props.page - 1,
        hitsPerPage: 10,
      });
      // map search results
      this.setState({
        hits: resp.hits.map(hit => ({
          id: hit.id,
          author: {
            name: hit.primary_author?.name ?? '',
            slug: hit.primary_author?.slug ?? '',
          },
          tags: hit.tags.map(t => ({
            name: t?.name ?? '',
            slug: t?.slug ?? '',
          })),
          excerpt: hit.excerpt,
          released: new Date(hit.published_at),
          slug: hit.slug,
          title: hit.title,
          image: hit.image,
        })),
        numberOfPages: resp.nbPages,
        processingTimeMs: resp.processingTimeMS,
      });
    } catch (err) {}
  }

  render() {
    const query = this.state.query;
    const articles = this.state.hits;

    return (
      <div className={this.props.className} style={this.props.style}>
        <h4 tw="mb-16">
          Selesai melakukan pencarian "{query}" dalam {this.state.processingTimeMs} milidetik
        </h4>
        {articles.map((article, idx, articles) => (
          <div>
            <SearchItem key={article.slug} {...article} />
            {idx + 1 < articles.length ? <Separator /> : ''}
          </div>
        ))}
        <div tw="my-16">
          {times(this.state.numberOfPages, n => {
            const pg = n + 1;
            return <PageLink key={pg} to={`/search/?query=${query}&page=${pg}`}>{pg}</PageLink>;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
