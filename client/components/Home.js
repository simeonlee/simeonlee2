import React, { Component } from 'react';
import { Link } from 'react-router';
import Landing from './Landing';
import Art from './Art';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Helmet from 'react-helmet'; // document head manager

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      art1: './images/background/road.jpg',
      art2: './images/background/bean.jpg',
    }
  }

  render() {
    return (
      <div>
        <Helmet title="The Portfolio of Simeon Lee" />
        <Landing />
        <Bio />
        <Art imgUrl={this.state.art1} />
        <Portfolio />
        <Art imgUrl={this.state.art2} />
        <Footer />
      </div>
    )
  }
}