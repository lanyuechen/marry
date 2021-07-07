import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

import './style.less';

export default (props) => {
  const { src, aspect } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }

  return (
    <div style={{width: '100%', height: 300, position: 'relative'}}>
      <Cropper
        image={src}
        aspect={aspect}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  )
}