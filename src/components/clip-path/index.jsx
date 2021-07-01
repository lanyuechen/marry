import React from 'react';

import { normalize } from '@/utils/utils';

export default (props) => {
  const { id, path, size, viewBox = "0 0 1024 1024" } = props;
  const width = normalize(size[0], window.innerWidth);
  const height = normalize(size[1], window.innerHeight);

  const scale = Math.min(width / 1024, height / 1024);

  return (
    <svg width="0" height="0" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <clipPath id={id} transform={`scale(${scale})`}>
          <path d={path} p-id="2011"></path>
        </clipPath>
      </defs>
    </svg>
  )
}