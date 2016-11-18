import React from 'react'
import reddit from '../../images/portfolio/reddit/reddit-unleashed-ui.png'

const Reddit = () => {
  return (
    <div className="portfolio-module portfolio-module-reddit">
      <div className="module-header">
        <div className="module-title portfolio-title-reddit">Reddit Unleashed</div>
      </div>
      <img src={reddit} className="portfolio-reddit-ui" />
    </div>
  )
}

export default Reddit;