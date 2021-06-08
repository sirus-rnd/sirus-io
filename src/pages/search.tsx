import React from 'react';
import 'twin.macro';
import { PageProps, navigate } from 'gatsby';
import queryString from 'query-string';
import BaseLayout from '../layouts/base';
import SearchResult from '../components/article/search-result';
import SearchForm from '../components/article/search-form';

interface SearchState {
  query?: string;
  page?: number;
}

class Search extends React.Component<PageProps, SearchState> {
  constructor(props: PageProps) {
    super(props);
    this.state = { query: '', page: 1 };
  }

  componentDidMount() {
    this.updateSearchParams(this.props.location.search);
  }

  updateSearchParams(search: string) {
    const params = queryString.parse(search);
    const query = (params['query'] as string) ?? '';
    const page = parseInt((params['page'] as string) ?? '1', 10);
    this.setState({
      query,
      page,
    });
  }

  componentDidUpdate(prevProps: PageProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.updateSearchParams(this.props.location.search);
    }
  }

  handleSearch(query: string) {
    navigate(`/search/?query=${query ?? ''}`);
  }

  render() {
    return (
      <BaseLayout>
        <section tw="py-16 px-8">
          <div tw="container grid grid-cols-none lg:grid-cols-3 gap-12">
            <div tw="w-full">
              <SearchForm query={this.state?.query} onSubmit={(query) => this.handleSearch(query)} />
            </div>
            <SearchResult
              tw="lg:col-span-2"
              query={this.state?.query}
              page={this.state?.page}
            ></SearchResult>
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default Search;
