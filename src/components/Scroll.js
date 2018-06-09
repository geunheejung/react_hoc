import React, { Component } from 'react';
import withWindowScroll from '../HOC/withWindowScroll';

class WindowScrollTracker extends Component {
  render() {
    return (
      <div>
        x: {this.props.x}, <br />
        y: {this.props.y}
      </div>
    )
  }
}

WindowScrollTracker = withWindowScroll(WindowScrollTracker);

export default WindowScrollTracker;