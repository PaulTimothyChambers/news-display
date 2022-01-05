import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    searchInput: ''
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder={ `SEARCH ${this.props.section.toUpperCase()}` }
          name='searchInput'
          value={ this.state.searchInput }
          onChange={ (e) => this.handleChange(e) }
          onSubmit={ () => this.props.searchArticles(this.state.searchInput) }
        />
      </form>
    )
  }
}

export default SearchForm;
