import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    searchInput: ''
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  newSearch = event => {
    event.preventDefault()
    const searchInput = this.state.searchInput
    this.props.searchArticles(searchInput)
    this.setState({ searchInput: '' })
  }


  render() {
    return (
      <form onSubmit={ event => this.newSearch(event) }>
        <input
          type='text'
          placeholder={ `SEARCH ${this.props.section.toUpperCase()}` }
          name='searchInput'
          value={ this.state.searchInput }
          onChange={ (e) => this.handleChange(e) }
        />
      </form>
    )
  }
}

export default SearchForm;
