import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { times } from 'lodash';
import { Link } from 'gatsby';

interface IndexDoc {
  id?: string;
  title?: string;
  image?: string;
  slug?: string;
  primary_author?: {
    name?: string;
  };
  tags?: {
    name?: string;
  };
  updated_at?: Date;
}

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);
const searchIndex = searchClient.initIndex('article_post');

interface SearchProps {
  query?: string;
  page?: number;
}

interface SearchState {
  hits?: IndexDoc[];
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
      this.setState({
        hits: resp.hits,
        numberOfPages: resp.nbPages,
        processingTimeMs: resp.processingTimeMS,
      });
    } catch (err) {}
  }

  render() {
    const query = this.state.query;
    const page = this.state.page;

    return (
      <div>
        <h3>
          selesai melakukan pencarian "{query}" dalam {this.state.processingTimeMs} milidetik
        </h3>
        {this.state.hits.map(h => (
          <p key={h.id}>{h.title}</p>
        ))}
        <div>
          {times(this.state.numberOfPages, n => {
            const p = n + 1;
            return <Link to={`/search/?query=${query}&page=${p}`}>{p}</Link>;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
