import React from 'react';
import Syncope from './portfolio/Syncope';
import Journey from './portfolio/Journey';
import Memly from './portfolio/Memly';
import Scavenge from './portfolio/Scavenge';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Memly />
      <Syncope />
      {/*<Scavenge />*/}
    </div>
  )
}

export default Portfolio;