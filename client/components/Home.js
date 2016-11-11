import React, { Component } from 'react'
import { Link } from 'react-router'
import syncope from '../images/portfolio/syncope/ui-overview.png'
import journey from '../images/portfolio/journey/journal-ui.png'
// import d3 from 'd3'
// import Globe from './Globe'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var bio = 'Simeon Lee is a software engineer who is \
               currently using his creativity and grit \
               to bring ideas to life in San Francisco. \
               His focus lies in digital creation with \
               a strong emphasis on user empathy \
               and a product sense backed by \
               business and marketing experience. \
               Welcome to Simeon\'s portfolio, where he showcases \
               a range of various projects that give an idea of \
               what\'s on his mind.'

    return (
      <div>
        <div className="intro">
          <div className="intro-name">Simeon Lee</div>
          <div className="intro-inspiration">the things you are passionate about are not random,</div>
          <div className="intro-inspiration">they are your calling</div>
        </div>
        <div className="bio">
          <div className="bio-title">Chicago-born</div>
          <div className="bio-title">Los Angeles-educated</div>
          <div className="bio-title">New York-trained</div>
          <div className="bio-title">San Francisco-based</div>
          <div className="bio-text">{bio}</div>
        </div>
        <div className="portfolio-module portfolio-module-journey">
          <div className="portfolio-title portfolio-title-journey">Journey</div>
          <img src={journey} className="portfolio-journey-ui" />
        </div>
        <div className="portfolio-module portfolio-module-syncope">
          <div className="portfolio-title portfolio-title-syncope">Syncope</div>
          <img src={syncope} className="portfolio-syncope-ui" />
        </div>
      </div>
    )
  }
}