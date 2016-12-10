import React, { Component } from 'react';
import { Link } from 'react-router';
import Landing from './Landing';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Helmet from 'react-helmet'; // document head manager

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet title="The Portfolio of Simeon Lee" />
        <Landing />
        <Bio />
        <Portfolio />
        <Footer />
      </div>
    )
  }
}