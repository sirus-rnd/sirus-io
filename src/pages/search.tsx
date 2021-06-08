import React, { FormEvent, ChangeEvent } from 'react';
import 'twin.macro';
import { PageProps, navigate } from 'gatsby';
import queryString from 'query-string';
import BaseLayout from '../layouts/base';
import SearchResult from '../components/article/search-result';

interface SearchState {
  formQuery: string;
  query?: string;
  page?: number;
}

class Search extends React.Component<PageProps, SearchState> {
  constructor(props: PageProps) {
    super(props);
    this.state = { formQuery: '', query: '', page: 1 };
  }

  componentDidMount() {
    this.updateSearchParams(this.props.location.search);
  }

  updateSearchParams(search: string) {
    const params = queryString.parse(search);
    const query = (params['query'] as string) ?? '';
    const page = parseInt((params['page'] as string) ?? '1', 10);
    this.setState({
      formQuery: query,
      query,
      page,
    });
  }

  componentDidUpdate(prevProps: PageProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.updateSearchParams(this.props.location.search);
    }
  }

  handleSearch(event: FormEvent) {
    event.preventDefault();
    navigate(`/search/?query=${this.state?.formQuery ?? ''}`);
  }

  handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      formQuery: event.target?.value,
    });
  }

  render() {
    // get query from url

    return (
      <BaseLayout>
        <section tw="py-16 px-8">
          <div tw="container grid grid-cols-none md:grid-cols-3 gap-12">
            <div>
              <form onSubmit={e => this.handleSearch(e)}>
                <input
                  type="search"
                  name="query"
                  value={this.state?.formQuery}
                  onChange={e => this.handleQueryChange(e)}
                />
                <button type="submit">search</button>
              </form>
            </div>
            <SearchResult query={this.state?.query} page={this.state?.page}></SearchResult>
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default Search;
