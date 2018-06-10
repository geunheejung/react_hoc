import React, { Component } from 'react';
import _identity from 'lodash/identity';

const withMouserPointer = ({ wait = 0, mapProps = _identity }) =>
  (WrappedComponent) =>
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

      componentWillUnmount() {
        this.clear();
      }

      clear = () => {
        window.removeEventListener('mousemove', this.scrollHandler);
      }

      init = () => {
        window.addEventListener('mousemove', this.scrollHandler);
      }

      scrollHandler = ({ clientX, clientY }) => {
        console.log('동작 중');
        this.updateCursorPointerBy(clientX, clientY);
      }

      updateCursorPointerBy = (x, y) => {
        this.setState({
          x,
          y,
        })
      }

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
    }

export default withMouserPointer;