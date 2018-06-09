import React, { Component } from 'react';

const withWindowScroll = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        x: 0,
        y: 0,
      };
    }

    componentDidMount() {
      this.init();
    }

    componentWillUnMount() {
      this.clear();
    }

    clear = () => {
      window.removeEventListener('scroll', this.scrollHandler);
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
        <WrappedComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }

export default withWindowScroll;