import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({abstract, section}) => {
  return (
    <div className='article-card'>
      <div className='category-holder'>
        <p>{section}</p>
      </div>
      <p>{abstract}</p>
    </div>
  
  )
}

export default ArticleCard