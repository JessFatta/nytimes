import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({paragraph, section}) => {
  return (
    <div className='article-card'>
      <p>{paragraph}</p>
      <p>{section}</p>
    </div>
  )
}

export default ArticleCard