import React, { Component, Fragment } from 'react';
import HOC from '../HOC';

class _ScrollWithMouse extends Component {
	constructor(props) {
		super(props);
	}
	render() {
	  const props = this.props;

		return (
      <Fragment>
        <section>
          <h1>Scroll</h1>
          x : {props.scrollX}
          y : {props.scrollY}
        </section>
        <section>
          <h1>Mouse</h1>
          x : {props.mouseX}
          y : {props.mouseY}
        </section>
      </Fragment>
		);
	}
}

const mouseProps = ({ x, y }) => ({
  mouseX: x,
  mouseY: y,
});

const scrollProps = ({ x, y }) => ({
  scrollX: x,
  scrollY: y,
});

const ScrollWithMouse = HOC.withMouserPointer(
  HOC.withWindowScroll(
    _ScrollWithMouse,
    {
     mapProps: mouseProps
    }
  ),
  {
    wait: 30,
    mapProps: scrollProps,
  }
)

export default ScrollWithMouse;