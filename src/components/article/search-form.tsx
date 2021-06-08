import React, { FormEvent, ChangeEvent } from 'react';
import 'twin.macro';
import { css } from '@emotion/react';

interface SearchFormState {
  query?: string;
}

interface SearchFormProps {
  query?: string;
  onSubmit?: Function;
  style?: React.CSSProperties;
  className?: string;
}

class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = { query: props.query };
  }

  componentDidUpdate(prevProps: SearchFormProps) {
    if (prevProps.query !== this.props.query) {
      this.setState({
        query: this.props.query,
      });
    }
  }

  handleSearch(event: FormEvent) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      query: event.target?.value,
    });
  }

  render() {
    return (
      <form
        css={css`
          display: flex;
          border: 1px solid #333;
          border-radius: 6px;
          align-items: center;
        `}
        onSubmit={e => this.handleSearch(e)}
      >
        <input
          css={css`
            flex-grow: 1;
            border: none;
            padding: 3px 0;
            margin-left: 6px;
            font-size: 16px;
            &:focus {
              outline: none;
            }
          `}
          type="search"
          name="query"
          placeholder="ketik enter untuk melakukan pencarian"
          value={this.state?.query}
          onChange={e => this.handleQueryChange(e)}
        />
        <button
          css={css`
            border: none;
            background: transparent;
            padding: 0;
            margin-right: 6px;
            font-size: 18px;
            height: 1.2em;
            cursor: pointer;
          `}
          type="submit"
        >
          <span className="icon icon-search"></span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
