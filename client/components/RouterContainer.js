import React, { Component } from 'react';
import Nav from './Nav';

export default class RouterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTransformed: false, // set to true after scroll a certain distance
      updateScroll: true,
    }
  }

  render() {
    return (
      <div>
        <Nav updateScrollState={this.updateScrollState.bind(this)} transformed={this.state.navTransformed} />
        {this.props.children}
      </div>
    )
  }

  updateScrollState() {
    if (this.getScrollOffsets().y > 300) {
      this.setState({
        navTransformed: true,
        updateScroll: false,
      });
    } else {
      this.setState({
        navTransformed: false,
        updateScroll: false,
      });
    }
  }

  getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;
    
    if ( typeof w.pageYOffset === 'number' ) {
      x = w.pageXOffset;
      y = w.pageYOffset;
    } else {
      docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')
        ? doc.documentElement
        : doc.body;
      x = docEl.scrollLeft;
      y = docEl.scrollTop;
    }
    return {x:x, y:y};
  }
}