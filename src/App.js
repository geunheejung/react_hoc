import React, { Component } from 'react';
import { HelloJohn, HelloMary } from './components/Hello';
import { connect } from 'react-redux';
import TopStatus from './components/TopStatus';
import WindowScrollTracker from './components/Scroll';
import WindowMouserPointer from './components/Mouse';
import ScrollWithMouse from './components/ScrollWithMouse'

const reactLogger = (currentState, type) => {
  console.group('ACTION !!!', type);
  console.log('currentState ::', currentState);
  console.groupEnd();
};

const ACTION_TYPES = {
  TOGGLE_SCROLL_EVENT: 'TOGGLE_SCROLL_EVENT',
};

const ACTIONS = {
  toggleScrollEvent: (prevState) => ({
    isToggleScrollEvent: !prevState.isToggleScrollEvent
  }),
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleScrollEvent: false,
    }
  }

  toggleScrollEvent = () => {
    this.updateToggleScrollEvent(ACTIONS.toggleScrollEvent);
  }

  updateToggleScrollEvent = (toggleScroll) => {
    this.setState(toggleScroll, () => {
      reactLogger(this.state, ACTION_TYPES.TOGGLE_SCROLL_EVENT);
    });
  }

  render() {
    const generatorBrTag = () => {
      const emptyArr = new Array(100);
      emptyArr.fill((key) => <br key={key}/>);

      return emptyArr;
    }

    return (
      <main>
        <HelloJohn
          displayName={'HelloByJohn'}
          myName={'geuni'}
        />
        <HelloMary
          myName={'sky'}
        />
        <button
          onClick={this.toggleScrollEvent}
        >
          TOGGLE ScrollEvent
        </button>
        {
          this.state.isToggleScrollEvent && <WindowScrollTracker />
        }

        {
          generatorBrTag().map((br, i) => br(i))
        }
      </main>
    );
  }
}

export default App;
