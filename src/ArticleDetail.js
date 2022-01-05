import React from 'react';

const ArticleDetail = ({ article, returnHome }) => {
  return (
    <div className="">
      <img className="" src={ article.imgSrc } />
      <p className="">{ article.abstract }</p>
      <button className="" onClick={ () => returnHome('home') }>Return Home</button>
    </div>
  )
}

export default ArticleDetail;
