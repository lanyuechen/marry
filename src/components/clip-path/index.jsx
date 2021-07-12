import React, { useMemo } from 'react';

export default (props) => {
  const { id, path, scale, size, viewBox = "0 0 1024 1024" } = props;

  const transform = useMemo(() => {
    const width = size[0];
    const height = size[1];
    const vb = viewBox.split(' ');
    const aspect = vb[2] / vb[3];

    let fitWidth, fitHeight;
    if (aspect > width / height) {
      fitWidth = width * scale;
      fitHeight = fitWidth / aspect;
    } else {
      fitHeight = height * scale;
      fitWidth = fitHeight * aspect;
    }
    const left = (width - fitWidth) / 2;
    const top = (height - fitHeight) / 2;
    const s = fitWidth / vb[2];

    return `translate(${left}, ${top}) scale(${s})`;
  }, []);

  return (
    <svg width="0" height="0" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <clipPath id={id} transform={transform}>
          <path d={path} p-id="2011"></path>
        </clipPath>
      </defs>
    </svg>
  )
}