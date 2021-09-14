import React, { useMemo } from 'react';

const Frames = {
  burrs: require('./burrs'),
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