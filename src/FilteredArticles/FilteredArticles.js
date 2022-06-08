import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'

const FilteredArticles = ({filteredArticles, section}) => {
  const filteredArticlesCards = filteredArticles.map(article => {
    return (
      <ArticleCard 
        abstract={article.headline.main}
        section={article.subsection_name}
        url={article.web_url}
        key={article._id}
        //id={article.id}
        //image={a
        />
    )
  })

  return (
    <div className='filtered-articles-container'>
    {filteredArticlesCards}
    </div>
  )
}

export default FilteredArticles