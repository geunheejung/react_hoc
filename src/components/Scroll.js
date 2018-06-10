import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import rootHOC from '../HOC/index';

class WindowScrollTracker extends Component {
  render() {
    const { scrollX, scrollY, mouseX, mouseY } = this.props;
    return (
      <Fragment>
        <section>
          <h1>Scroll</h1>
          <ul>
            <li>X : {scrollX}</li>
            <li>Y : {scrollY}</li>
          </ul>
        </section>
        <section>
          <h1>Mouse</h1>
          <ul>
            <li>X : {mouseX}</li>
            <li>Y : {mouseY}</li>
          </ul>
        </section>
      </Fragment>
    )
  }
}

const windowScrollOptions = {
  wait: 30,
  mapProps: ({ x, y }) => ({
    scrollX: x,
    scrollY: y,
  }),
}

const windowMouseOptions = {
  wait: 30,
  mapProps: ({ x, y }) => ({
    mouseX: x,
    mouseY: y,
  }),
}

const enhance = compose(
  rootHOC.withWindowScroll(windowScrollOptions),
  rootHOC.withMouserPointer(windowMouseOptions),
);

const EnHancedComponent = enhance(WindowScrollTracker);

export default EnHancedComponent;