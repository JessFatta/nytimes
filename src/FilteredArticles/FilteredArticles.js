import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link } from "react-router-dom";


const FilteredArticles = ({filteredArticles, section}) => {
  const filteredArticlesCards = filteredArticles.map((article, i) => {
    return (
      <Link to={`/${i}`}>
      <ArticleCard 
        abstract={article.headline.main}
        section={article.subsection_name}
        url={article.web_url}
        key={i}
        id={article._id}
        />
        </Link>
    )
  })

  return (
    <div className='filtered-articles-container'>
      {filteredArticlesCards}
    </div>
  )
}

export default FilteredArticles