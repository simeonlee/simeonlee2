import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import RouterContainer from './RouterContainer';
import Home from './Home';
import Portfolio from './Portfolio';
import Journey from './portfolio/Journey';
import Bio from './Bio';
import Footer from './Footer';
import WOW from 'wowjs/dist/wow.min.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    new WOW().init();
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={RouterContainer}>
            <IndexRoute component={Home}/>
            <Route path="/" component={Home}/>
            <Route path="/showcase" component={Portfolio}/>
            <Route path="/journey" component={Journey}/>
            <Route path="/about" component={Bio}/>
            <Route path="/contact" component={Footer}/>
          </Route>
        </Router>
      </div>
    )
  }
}