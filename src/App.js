import React, { Component } from 'react';
import { HelloJohn, HelloMary } from './components/Hello';
import WindowScrollTracker from './components/Scroll';

class App extends Component {
  render() {
    const generatorBrTag = () => {
      const brArr = new Array(100);
      brArr.fill(<br />);

      return brArr;
    }

    return (
      <div>
        <HelloJohn
          myName={'geuni'}
        />
        <HelloMary
          myName={'sky'}
        />
        <WindowScrollTracker />
        {
          generatorBrTag().map((br) => br)
        }
      </div>
    );
  }
}

export default App;
