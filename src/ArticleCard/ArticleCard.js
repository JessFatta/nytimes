import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({abstract, section, image}) => {
  return (
    <div className='article-card'>
      <p>{abstract}</p>
      <p>{section}</p>
      <img src={image} />
    </div>
  )
}

export default ArticleCard