import React from 'react';
import utils from '../math-utils';

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} style={props.colour} className="star" />
    ))}
  </>
);

export default StarsDisplay;
