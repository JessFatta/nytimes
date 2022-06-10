import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link } from "react-router-dom";

const AllArticles = ({ articles }) => {
  const articleCards = articles.map((article, i) => {
    return (
      <Link to={`/${i}`}>
      <ArticleCard 
        abstract={article.headline.main}
        section={article.subsection_name}
        url={article.web_url}
        key={i}
      />
      </Link>
    )
  })

  return (
    <div className='article-cards-container'>
      {articleCards}
    </div>
  )
}

export default AllArticles