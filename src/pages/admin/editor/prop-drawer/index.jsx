import React from 'react';
import { Drawer, Input } from 'antd';

export default (props) => {
  const { pageIdx, elementIdx, onChange, onClose } = props;

  const handlePageChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(['pages', pageIdx, ...key], {$set: value});
  }

  const handleElementChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(['pages', pageIdx, 'elements', elementIdx, ...key], {$set: value});
  }

  return (
    <Drawer
      title="编辑"
      width="80%"
      visible={elementIdx > -1}
      onClose={onClose}
    >
      <Input onChange={e => handleElementChange('props.value', e.target.value)} />
    </Drawer>
  )
}