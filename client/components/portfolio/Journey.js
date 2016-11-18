import React from 'react'
import journeyLanding from '../../images/portfolio/journey/landing-page.png'
import journeyPage from '../../images/portfolio/journey/page@2x.png'
import journeyMockup from '../../images/portfolio/journey/journey-perspective-mockup.png'

const Journey = () => {
  return (
    <div className="portfolio-module portfolio-module-journey">
      <div className="module-header">
        <div className="module-title portfolio-title-journey">Journey</div>
      </div>
      <img src={journeyLanding} className="portfolio-journey-landing portfolio-hover" />
    </div>
  )
}

export default Journey;