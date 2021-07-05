import React from 'react';
import { Upload } from 'antd';

import './style.less';

export default (props) => {

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onChange = () => {
    
  }
  
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={onChange}
      onPreview={onPreview}
    >
      <button className="editor-entry-btn icon icon-edit" {...props} />
    </Upload>
  )
}