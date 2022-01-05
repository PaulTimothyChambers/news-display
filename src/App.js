import './App.css';
import React, { Component } from 'react';
import NewsContainer from './NewsContainer.js';
import SearchForm from './SearchForm.js';
import { loadArticles } from './apiCalls.js';

class App extends Component {
  state = {
    articles: [],
    section: '',
    noResults: ''
  }

  loadArticles = (section) => {
    this.clearState()
    // loadArticles(section).then(data => console.log(data.results))
    loadArticles(section).then(data => this.setState({ articles: data.results, section: section, noResults: '' }))
  }

  clearState = () => {
    this.setState({
      articles: []
    })
  }

  searchArticles = (searchInput) => {
    const filteredResults = this.state.articles.filter(article => {
      const includedInTitle = article.title.toLowerCase().includes(searchInput.toLowerCase())
      const includedInAbstract = article.abstract.toLowerCase().includes(searchInput.toLowerCase())
      if (includedInTitle || includedInAbstract) {
        return article
      }
    })

    if (filteredResults.length) {
      this.setState({ articles: filteredResults })

    } else {
      this.setState({ noResults: `There are no results for "${searchInput}"` })
    }
  }

  render() {
    return (
      <main className="app">
        <div className="logo-background">
          <img
            src="https://pluspng.com/img-png/new-york-times-logo-png-the-new-york-times-logo-png-and-vector-logo-img-4096x538.png"
            className="logo"
          />
        </div>
        <h3>What category of articles would you like to see? (choose below)</h3>
        <button onClick={ () => this.loadArticles('home') }>NY Times: Home Page News</button>
        <button onClick={ () => this.loadArticles('world') }>NY Times: World News</button>
        <button onClick={ () => this.loadArticles('us') }>NY TImes: US News</button>
        <div>
          {
            this.state.articles.length > 0 &&
              <SearchForm
                section={ this.state.section }
                searchArticles={ this.searchArticles }
              />
          }
          {
            this.state.noResults &&
              <p>{ this.state.noResults }</p>
          }
          <NewsContainer articles={ this.state.articles }/>
        </div>
      </main>
    )
  }
}

export default App;
