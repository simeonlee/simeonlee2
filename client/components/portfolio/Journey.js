import React from 'react'
import journeyLanding from '../../images/portfolio/journey/landing-page.png';
import journeyPage from '../../images/portfolio/journey/page@2x.png';
import journeyMockup from '../../images/portfolio/journey/journey-perspective-mockup.png';
import motivation from '../../images/portfolio/journey/motivation.png';
import Helmet from 'react-helmet';

const Journey = props => {
  var introduction = 'Journey is a web and Alexa journaling \
  application that promotes mental wellbeing. Based on the principles \
  of the five minute journal, users are prompted to record \
  thoughts that inspire gratitude and an optimistic growth mindset. \
  The app is augmented by natural language processing abilities \
  to provide the user an additional perspective in their reflections.';

  var bgUrl = './images/portfolio/journey/water.png';

  const landing = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: 'url(' + bgUrl + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    position: 'absolute',
    // zIndex: '-9999999',
  };

  return (
    <div className="port journey">
      <Helmet title="Journey | Overview" />
      <div className="port-header">
        <div style={landing}></div>
        <div className="port-header-title">Journey</div>
        <div className="port-header-subtitles">
          <div>Role Full Stack Engineer</div>
          <div>Context School Project</div>
          <div>Date October 2016</div>
        </div>
      </div>
      <div className="port-intro">
        <div className="port-intro-title">Introduction</div>
        <div className="port-intro-text">{introduction}</div>
      </div>
      <div className="port-conception">
        <div className="port-conception-title">01 Conception</div>
        <img src={motivation} className="port-conception-img" />
      </div>
      <img src={journeyLanding} className="portfolio-journey-landing portfolio-hover" />
    </div>
  )
}

export default Journey;