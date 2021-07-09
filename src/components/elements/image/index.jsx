import React, { useMemo } from 'react';

import './style.css';

export default (props) => {
  const { src, size, crop } = props;

  const style = useMemo(() => {
    if (crop) {
      const w = crop.areaPixel.width / crop.area.width * 100;
      const h = crop.areaPixel.height / crop.area.height * 100;
      const s = Math.max(size[0] / crop.areaPixel.width, size[1] / crop.areaPixel.height);
      const left = w * crop.area.x / 100 * s - size[0] * (crop.zoom - 1) / 2;
      const top = h * crop.area.y / 100 * s - size[1] * (crop.zoom - 1) / 2;
      
      return {
        transform: `rotate(${crop.rotation}deg) scale(${crop.zoom})`,
        objectPosition: `${-left / crop.zoom}px ${-top / crop.zoom}px`
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