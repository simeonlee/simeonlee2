import React from 'react'
import journeyLanding from '../../images/portfolio/journey/journey-landing@2x.png';
import signUpModule from '../../images/portfolio/journey/sign-up-module@2x.png';
import sfscape from '../../images/background/sfscape.jpg';
import journeyPage from '../../images/portfolio/journey/page@2x.png';
import journeyMockup from '../../images/portfolio/journey/journey-perspective-mockup.png';
import motivation from '../../images/portfolio/journey/motivation.png';
import SignUp from '../journey/components/access/SignUp.js';
import Helmet from 'react-helmet';
import arrow from '../../images/arrow@2x.png';

const Journey = props => {
  const bgUrl = './images/background/sfscape.jpg';
  const landing = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: 'url(' + bgUrl + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'absolute',
  };

  const introduction = 'Journey is a web and Alexa journaling \
  application that promotes mental wellbeing. Based on the principles \
  of the five minute journal, users are prompted to record \
  thoughts that inspire gratitude and an optimistic growth mindset. \
  The app is augmented by natural language processing abilities \
  to provide the user an additional perspective in their reflections.';

  return (
    <div className="showcase journey">
      <Helmet title="Journey | Overview" />
      <div className="showcase-header window-fit">
        <div style={landing}></div>
        <div className="showcase-header-title">Journey</div>
        <div className="landing-arrow wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.5s"><img src={arrow} /></div>
      </div>
      <div className="showcase-module">
        <div className="showcase-module-title">Introduction</div>
        <div className="showcase-module-text">{introduction}</div>
      </div>
      <div className="showcase-conception">
        <div className="showcase-module">
          <div className="showcase-module-title">01 Conception</div>
          <div className="showcase-module-subtitle">Motivation</div>
          <img src={motivation} className="showcase-conception-img" />
        </div>
        <div className="showcase-module">
          <div className="showcase-module-subtitle">Colors & Typography</div>
          <div className="typographies">
            <div className="typography cinzel">
              <div className="typography-title">Cinzel</div>
              <div className="typography-big-letters">Aa</div>
              <div className="typography-small-letters">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </div>
            <div className="typography raleway">
              <div className="typography-title">Raleway</div>
              <div className="typography-big-letters">Aa</div>
              <div className="typography-small-letters">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </div>
          </div>
          <div className="colors">
            <div className="color lynch">
              <div className="color-title">Lynch</div>
              <div className="color-swatch"></div>
              <div className="color-hex">#30363D</div>
            </div>
            <div className="color gossip">
              <div className="color-title">Gossip</div>
              <div className="color-swatch"></div>
              <div className="color-hex">#87D37C</div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-home showcase-module">
        <div className="showcase-module-title">02 Home</div>
        <div className="showcase-module-subtitle">Sign In</div>
        <div className="journey-sign-up-container">
          <div className="caption">
            <div className="caption-title">Join the movement</div>
            <div className="caption-body">When you sign up for the platform, you have three options in creating an account: manual, Facebook or Amazon</div>
          </div>
          <img src={signUpModule} className="sign-up-module-img" />
        </div>
        <div className="showcase-module">
          <div className="showcase-module-subtitle">Final Design</div>
          <img src={journeyLanding} className="showcase-home-img" />
        </div>
      </div>
      <div className="showcase-journal showcase-module">
        03 Journal
        Scroll
        Record
        Final Design
      </div>
      <div className="showcase-dashboard showcase-module">
        04 Dashboard
        Encourage
        Remember
        Reflect
        Focus
        Final Design
      </div>
      <div className="showcase-profile showcase-module">
        05 Profile
        Identify
        Manage
        Final Design
      </div>
      <div className="showcase-thanks showcase-module">
        Thank you for viewing
      </div>
      <div className="showcase-transition showcase-module">
        {/*props.next*/}
      </div>
    </div>
  )
}

//<div className="showcase-header-subtitles">
  //<div>Role Full Stack Engineer</div>
  //<div>Context School Project</div>
  //<div>Date October 2016</div>
//</div>
//
//<SignUp specificClass={'sign-up-module-lg'} />

export default Journey;