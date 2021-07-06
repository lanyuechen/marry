import React from 'react';
import ImageUpload from '@/components/image-upload';
import { fileToDataUrl } from '@/utils/utils';

import './style.less';

export default (props) => {
  const { onChange } = props;

  const handleChange = async ({ file }) => {
    if (file.status === 'done') {
      const dataUrl = await fileToDataUrl(file);
      console.log('==========')
      onChange(dataUrl);
    }
  }

  return (
    <ImageUpload onChange={handleChange}>
      <button className="editor-entry-btn icon icon-edit" {...props} />
    </ImageUpload>
  )
}