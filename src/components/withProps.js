import React from 'react';

function withProps(Comp, props) {
  return function(ownProps) {
    return (
      <Comp
        {...props}
        {...ownProps}
      />
    );
  }
}

export default withProps;