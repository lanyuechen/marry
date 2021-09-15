/**
 * 毛边边框，模拟撕纸的效果
 */

import React, { useMemo } from 'react';
import { uuid } from '@/utils/utils';

import style from './style.less';

export default (props) => {
  const { children, borderWidth = 24 } = props;
  const id = useMemo(() => uuid());
  return (
    <div
      className={style.frameContainer}
      style={{
        padding: borderWidth / 2
      }}
    >
      <div
        className={style.frame}
        style={{
          borderWidth,
          filter: `url(#wav-${id})`,
        }}
      />
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <filter id={`wav-${id}`}>
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  )
}