import React from 'react';
import './CurrentArticle.css'

const CurrentArticle = ({details}) => {
  return (
    <div className='details-view'>
      <h3>{details.headline.main}</h3>
      <p>{details.byline.original}</p>
      <p>{details.abstract}</p>
      <p>{details.lead_paragraph}</p>
      <button className='read-more-button'><a href={details.web_url}>Click to read full article</a></button>
    </div>
  )
}


export default CurrentArticle