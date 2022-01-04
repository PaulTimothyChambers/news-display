import React, { Component } from 'react';
import NewsCard from './NewsCard.js';

class NewsContainer extends Component {
  state = {
    articles: []
  }

  componentDidMount = () => {
    loadArticles().then()
  }
}

export default NewsContainer
