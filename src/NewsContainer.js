import React, { Component } from 'react';
import NewsCard from './NewsCard.js';
import './NewsContainer.css';

const NewsContainer = ({ articles, getArticleDetails }) => {
  
  const allArticles = articles.map((article, i) => {
    return (
      <NewsCard
        key={ i }
        title={ article.title }
        abstract={ article.abstract }
        img={ article.multimedia[0] }
        getArticleDetails={ getArticleDetails }
      />
    )
  })

  return (
    <div className="article-card">
      { allArticles }
    </div>
  )
}

export default NewsContainer
