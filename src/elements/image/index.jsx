import React, { useMemo } from 'react';
import PropForm from './prop';

import style from './style.css';

const Image = (props) => {
  const { src, size, crop, ...otherProps } = props;

  const cropedStyle = useMemo(() => {
    if (crop && crop.areaPixel && crop.area && crop.zoom) {
      const w = crop.areaPixel.width / crop.area.width * 100;
      const h = crop.areaPixel.height / crop.area.height * 100;
      const s = Math.max(size[0] / crop.areaPixel.width, size[1] / crop.areaPixel.height);

      return {
        width: w * s / crop.zoom || 0,
        height: h * s / crop.zoom || 0,
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
    <div className={style.container}>
      <img
        className={style.image}
        style={cropedStyle}
        src={src}
        alt="img"
        {...otherProps}
      />
    </div>
  );
}

Image.PropForm = PropForm;

export default Image;