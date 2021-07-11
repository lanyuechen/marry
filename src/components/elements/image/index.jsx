import React, { useMemo } from 'react';

import './style.css';

export default (props) => {
  const { src, size, crop } = props;

  const style = useMemo(() => {
    if (crop) {
      const w = crop.areaPixel.width / crop.area.width * 100;
      const h = crop.areaPixel.height / crop.area.height * 100;
      const s = Math.max(size[0] / crop.areaPixel.width, size[1] / crop.areaPixel.height);

      return {
        width: w * s / crop.zoom,
        height: h * s / crop.zoom,
        transform: `
          translate(-50%, -50%)
          scale(${crop.zoom})
          translate(${-crop.area.x + 50}%, ${-crop.area.y + 50}%)
          rotate(${crop.rotation}deg)
        `,
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