import React, { Component } from 'react';
import { Link } from 'react-router';
import Landing from './Landing';
import Bio from './Bio';
import Character from './Character';
import Footer from './Footer';
import Syncope from './portfolio/Syncope';
import Journey from './portfolio/Journey';
import Memly from './portfolio/Memly';
import Scavenge from './portfolio/Scavenge';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Landing />
        <Bio />
        <Journey />
        {/*<Character />*/}
        <Memly />
        <Syncope />
        {/*<Scavenge />*/}
        <Footer />
      </div>
    )
  }
}