import React, { Component, Fragment } from 'react';
import withMouserPointer from '../HOC/withMouserPointer';

class Mouse extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
      <Fragment>
        mouse_X: {this.props.mouseX}
        mouse_Y: {this.props.mouseY}
      </Fragment>
		);
	}
}

Mouse = withMouserPointer(
  Mouse,
  {
    mapProps: ({ x, y }) => ({
      mouseX: x,
      mouseY: y,
    })
  }
);

export default Mouse;