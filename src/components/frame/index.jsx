import React, { useMemo } from 'react';

import Burrs from './burrs';
const Frames = {
  burrs: Burrs,
}

export default (props) => {
  const { children, type, ...otherProps } = props;

  const Frame = useMemo(() => Frames[type], [type]);

  if (!Frame) {
    return children;
  }

  return (
    <Frame {...otherProps}>
      {children}
    </Frame>
  );
}