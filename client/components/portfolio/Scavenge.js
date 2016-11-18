import React from 'react'
import scavenge from '../../images/portfolio/scavenge/scavenge-ui.png'

const Scavenge = () => {
  return (
    <div className="portfolio-module portfolio-module-scavenge">
      <div className="module-header">
        <div className="module-title portfolio-title-scavenge">Scavenge</div>
      </div>
      <img src={scavenge} className="portfolio-scavenge-ui portfolio-hover" />
    </div>
  )
}

export default Scavenge;