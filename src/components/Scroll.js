import React, { Component } from 'react';

class WindowScrollTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    }
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    window.addEventListener('scroll', () => {
      this.scrollHandler(window.pageXOffset, window.pageYOffset);
    });
  }

  scrollHandler = (windowX, windowY) => {
    this.updateCursorPointerBy(windowX, windowY);
  }

  updateCursorPointerBy = (x, y) => {
    this.setState({
      x,
      y,
    }, () => {
      console.group('current scroll Pointer');
      console.log('x : ', x);
      console.log('y : ', y);
      console.groupEnd();
    })
  }

  render() {
    return (
      <div>
        x: {this.state.x}, <br />
        y: {this.state.y}
      </div>
    )
  }
}

export default WindowScrollTracker;