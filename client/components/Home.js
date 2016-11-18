import React, { Component } from 'react';
import { Link } from 'react-router';
import Landing from './Landing';
import Bio from './Bio';
import Syncope from './portfolio/Syncope';
import Journey from './portfolio/Journey';
import Memly from './portfolio/Memly';
import Scavenge from './portfolio/Scavenge';
import Footer from './Footer';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Landing />
        <Bio />
        <Memly />
        <Journey />
        <Syncope />
        {/*<Scavenge />*/}
        <Footer />
      </div>
    )
  }
}