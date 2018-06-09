import React from 'react';
import withProps from './withProps';

const Hello = (props) => {
  return (
    <div>
      Hello, {props.name}. I am {props.myName}
    </div>
  );
}

export const HelloJohn = withProps(
  Hello,
  {
    name: 'John',
  }
);
export const HelloMary = withProps(
  Hello,
  {
    name: 'Mary'
  }
);