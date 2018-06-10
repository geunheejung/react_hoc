import React, { PureComponent, Fragment } from 'react';
import withWindowScroll from '../HOC/withWindowScroll';

class TopStatus extends PureComponent {
  render() {
    return (
      <Fragment>
        {
          this.props.isScrollOnTop && "It's on Top!!"
        }
      </Fragment>
    )
  }
}


const WindowScrollTopStatus = withWindowScroll(
  TopStatus,
  {
    mapProps: ({ y }) => ({
      isScrollOnTop: y === 0,
    })
  }
);

export default WindowScrollTopStatus;