import React, { useMemo } from 'react';
import { Drawer, Input } from 'antd';
import ImageEditor from '../image-editor';

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
    return data.pages.find((p, idx) => idx === pageIdx)?.elements?.find((e, idx) => idx === elementIdx);
  }, [data, pageIdx, elementIdx]);

  console.log('===', element)

  return (
    <Drawer
      title="编辑"
      width="80%"
      visible={elementIdx > -1}
      onClose={onClose}
    >
      {element && (
        <ImageEditor
          src={element.props.src}
          aspect={element.size[0] / element.size[1]}
        />
      )}
      <Input onChange={e => handleElementChange('props.value', e.target.value)} />
    </Drawer>
  )
}