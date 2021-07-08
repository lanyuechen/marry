import React, { useMemo } from 'react';

import './style.css';

export default (props) => {
  const { src, crop } = props;

  const style = useMemo(() => {
    if (crop) {
      const positionX = crop.x === 0 ? 0 : crop.x / (100 - crop.width) * 100;
      const positionY = crop.y === 0 ? 0 : crop.y / (100 - crop.height) * 100;
      return {
        transform: `rotate(${crop.rotation}deg) scale(${crop.zoom})`,
        objectPosition: `${positionX}% ${positionY}%`
      };
    }
  }, [crop]);

  return (
    <img
      className="element-image"
      style={style}
      src={src}
      alt="img"
    />
  );
}