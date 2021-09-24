import React, { useMemo } from 'react';

export const FRAMES = {
  rect: require('./rect').default,
  burrs: require('./burrs').default,
}

export default (props) => {
  const { children, type, ...otherProps } = props;

  const Frame = useMemo(() => FRAMES[type], [type]);

  if (!Frame) {
    return children;
  }

  return (
    <Frame {...otherProps}>
      {children}
    </Frame>
  );
}