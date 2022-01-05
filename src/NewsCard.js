import React, { Component } from 'react';
import './NewsCard.css'

const NewsCard = ({ abstract, img, title, getArticleDetails }) => {

  return (
    <button
      className="article-button"
      onClick={ () => getArticleDetails(abstract, img.url) }
    >
      <img className="article-button__image" src={img.url} />
      <h3>{ title }</h3>
      <p>{ abstract }</p>
    </button>
  )
}

export default NewsCard
