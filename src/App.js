import './App.css';
import React, { Component } from 'react';
import NewsContainer from './NewsContainer.js';
import SearchForm from './SearchForm.js';
import { loadArticles } from './apiCalls.js';

class App extends Component {
  state = {
    articles: [],
    section: ''
  }

  loadArticles = (section) => {
    this.clearState()
    loadArticles(section).then(data => this.setState({ articles: data.results, section: section }))
  }

  clearState = () => {
    this.setState({
      articles: []
    })
  }

  searchArticles = (searchInput) => {
    
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
          <NewsContainer articles={ this.state.articles }/>
        </div>
      </main>
    )
  }
}

export default App;
