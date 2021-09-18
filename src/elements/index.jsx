import React, { useMemo } from 'react';
import ClipPath from '@/components/clip-path';
import Frame from '@/components/frame';

const ELEMENTS = {
  image: require('./image').default,
  text: require('./text').default,
  icon: require('./icon').default,
}

export const PROP_FORMS = Object.entries(ELEMENTS).reduce((p, n) => ({
  ...p,
  [n[0]]: n[1].PropForm,
}), {});

export default (props) => {
  const { type, size, clip, frame, elementProps } = props;
  
  const C = useMemo(() => ELEMENTS[type], [type]);

  let elementJsx = <C {...elementProps} size={size} />;
  if (frame) {
    elementJsx = <Frame {...frame}>{elementJsx}</Frame>;
  }
  if (clip) {
    elementJsx = <ClipPath {...clip} size={size}>{elementJsx}</ClipPath>;
  }
  return elementJsx;
}
