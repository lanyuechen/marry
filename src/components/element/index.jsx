import React, { useMemo } from 'react';

import ClipPath from '@/components/clip-path';
import Frame from '@/components/frame';
import ELEMENTS from '@/components/elements';

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
