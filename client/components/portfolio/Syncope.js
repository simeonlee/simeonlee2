import React from 'react'
import syncope from '../../images/portfolio/syncope/card-splay@2x.png'

const Syncope = () => {
  return (
    <div className="portfolio-module portfolio-module-syncope">
      <div className="module-header">
        <div className="module-title portfolio-title-syncope">Syncope</div>
      </div>
      <img src={syncope} className="portfolio-syncope-ui portfolio-hover" />
    </div>
  )
}

export default Syncope;