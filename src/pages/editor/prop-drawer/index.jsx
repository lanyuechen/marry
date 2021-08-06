import React, { useMemo } from 'react';
import { Drawer, Input } from 'antd';
import { prepareElement } from '@/utils/prepare';
import ImageCrop from '../image-crop';

import style from './style.less';

export default (props) => {
  const { data, pageIdx, elementIdx, onChange, onClose } = props;

  const handlePageChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(['pages', pageIdx, ...key], {$set: value});
  }

  const handleElementChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(['pages', pageIdx, 'elements', elementIdx, ...key], {$set: value});
  }

  const element = useMemo(() => {
    const ele = data.pages.find((p, idx) => idx === pageIdx)?.elements?.find((e, idx) => idx === elementIdx);
    return ele && prepareElement(ele);
  }, [data, pageIdx, elementIdx]);

  return (
    <Drawer
      className={style.drawer}
      title="编辑"
      width="90%"
      visible={elementIdx > -1}
      onClose={onClose}
    >
      {element && (
        <ImageCrop
          src={element.props.src}
          aspect={element.size[0] / element.size[1]}
          crop={element.props.crop}
          onChange={crop => handleElementChange('props.crop', crop)}
        />
      )}
    </Drawer>
  )
}