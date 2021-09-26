/**
 * 毛边边框，模拟撕纸的效果
 */

import React, { useMemo } from 'react';
import { uuid } from '@/utils/utils';

import style from './style.less';

export default (props) => {
  const { children, borderWidth = 24, borderRadius = 0 } = props;
  const id = useMemo(() => uuid());
  return (
    <div className={style.burrsFrame}>
      <div
        className={style.frame}
        style={{
          borderWidth,
          borderRadius: `${borderRadius * 100}%`,
          filter: `url(#wav-${id})`,
        }}
      />
      <div
        className={style.frameContent}
        style={{
          borderWidth: borderWidth / 2,
          borderRadius: `${borderRadius * 100}%`,
        }}
      >
        {children}
      </div>
      <svg width={0} height={0} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <filter id={`wav-${id}`}>
          <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  )
}