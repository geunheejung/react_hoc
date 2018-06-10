import React, { Component } from 'react';
import _throttle from 'lodash/throttle';
import _identity from 'lodash/identity';
import { getDisplayName } from '../Helper';

const getWindow = () => window;

const withWindowScroll = ({ wait = 0, mapProps = _identity }) =>
  (WrappedComponent) =>
    class extends Component {
      constructor(props) {
        super(props);

        this.state = {
          x: 0,
          y: 0,
        };
      }

      static displayName = `withWindowScroll(${getDisplayName(WrappedComponent)})`;

      componentDidMount() {
        this.init();
      }

      componentWillUnmount() {
        this.clear();
      }

      clear = () => {
        window.removeEventListener('scroll', this.scrollHandler);
      }

      init = () => {
        window.addEventListener('scroll', this.scrollHandler);
      }

      scrollHandler = () => {
        const { pageXOffset, pageYOffset } = getWindow();
        console.log('동작 중 스크롤!');
        this.updateCursorPointerBy(pageXOffset, pageYOffset);
      }

      updateCursorPointerBy = _throttle((x, y) => {
        this.setState({
          x,
          y,
        }, () => {
          console.group('current scroll Pointer');
          console.log('x : ', x);
          console.log('y : ', y);
          console.groupEnd();
        })
      }, wait);

      render() {
        const { x, y } = this.state;
        const passingProps = mapProps({ x, y });

        return (
          <WrappedComponent
            {...this.props}
            {...passingProps}
          />
        )
      }
    };

export default withWindowScroll;