import React from 'react'
import memly from '../../images/portfolio/memly/memly-landing@2x.png'

const Memly = () => {
  return (
    <div className="portfolio-module portfolio-module-memly">
      <div className="module-header">
        <div className="module-title portfolio-title-memly">Memly</div>
      </div>
      <img src={memly} className="portfolio-memly-ui portfolio-hover" />
    </div>
  )
}

export default Memly;