import React from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import 'antd/es/modal/style';
import 'antd/es/slider/style';

export default (props) => {
  const { onChange, children } = props;
  
  return (
    <ImgCrop rotate>
      <Upload
        onChange={onChange}
        showUploadList={false}
      >
        {children}
      </Upload>
    </ImgCrop>
  );
}