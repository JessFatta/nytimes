import React from 'react';
import './CurrentArticle.css'

const CurrentArticle = ({details}) => {
  return (
    <div className='details-view'>
      <h4>{details.abstract}</h4>
      <p>{details.lead_paragraph}</p>
      <p>{details.byline.original}</p>
      <p>read more:</p><a href={details.web_url}>{details.web_url}</a>
    </div>
  )
}


export default CurrentArticle