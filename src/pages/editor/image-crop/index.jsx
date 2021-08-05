import React, { useState, useEffect, useMemo } from 'react';
import Cropper from 'react-easy-crop';
import { Slider } from 'antd';
import { debounce } from '@/utils/utils';

import style from './style.less';

export default (props) => {
  const { src, aspect, crop: cropDefault, onChange } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (cropDefault) {
      setZoom(cropDefault.zoom);
      setRotation(cropDefault.rotation);
    }
  }, []);

  const onCropComplete = useMemo(() => {
    // croppedArea, croppedAreaPixels
    return debounce((area, areaPixel, zoom, rotation) => {
      onChange({
        area,
        areaPixel,
        zoom,
        rotation,
      });
    }, 200);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.imageCrop}>
        {/* <Cropper
          image={src}
          aspect={aspect}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          initialCroppedAreaPixels={cropDefault && cropDefault.areaPixel}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropComplete={(croppedArea, croppedAreaPixels) => onCropComplete(croppedArea, croppedAreaPixels, zoom, rotation)}
        /> */}
      </div>
      <Slider value={rotation} max={360} onChange={setRotation} />
    </div>
  );
};
