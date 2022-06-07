import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'

const AllArticles = ({ articles }) => {
  const articleCards = articles.map(article => {
    return (
      <ArticleCard 
        paragraph={article.lead_paragraph}
        section={article.subsection_name}
        url={article.web_url}
        key={article.id}
        id={article.id}
      />
    )
  })

  return (
    <div>
      {articleCards}
    </div>
  )
}

export default AllArticles