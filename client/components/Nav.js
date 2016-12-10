import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'nav' + (this.props.transformed ? ' transformed' : ' untransformed')}>
        <Link
          to="/"
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="2.5s"
        >
          <div className="nav-text">
            Simeon Lee
          </div>
        </Link>
        <Link
          to="/showcase"
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="2.5s"
        >
          <div className="nav-text">
            Showcase
          </div>
        </Link>
        <Link
          to="/journey"
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="2.5s"
        >
          <div className="nav-text">
            Journey
          </div>
        </Link>
        <a
          href="https://www.instagram.com/simeonleephotography/"
          target="_blank"
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="2.5s"
        >
          <div className="nav-text">
            Photography
          </div>
        </a>
        <Link
          to="/about"
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="2.5s"
        >
          <div className="nav-text">
            About
          </div>
        </Link>
        <Link
          to="/contact"
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="2.5s"
        >
          <div className="nav-text">
            Contact
          </div>
        </Link>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.updateScrollState);
    // Set scroll detection to repeat every .5 seconds to update nav size and property upon scroll
    setInterval(() => {
      this.props.updateScrollState();
    }, 500)
  }

  // Remove listeners that were set up in componentWillMount
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.updateScrollState);
  }
}