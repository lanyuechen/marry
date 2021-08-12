import React from 'react';
import ImageCrop from './image-crop';

export default (props) => {
  const { element, onChange } = props;

  return (
    <ImageCrop
      src={element.props.src}
      aspect={element.size[0] / element.size[1]}
      crop={element.props.crop}
      onChange={crop => onChange('props.crop', crop)}
    />
  )
}