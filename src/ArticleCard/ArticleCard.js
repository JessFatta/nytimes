import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({abstract, section, image}) => {
  return (
    <div className='article-card'>
      <div className='category-holder'>
        <p>{section}</p>
      </div>
      <p>{abstract}</p>
      <img src={image} />
    </div>
  
  )
}

export default ArticleCard