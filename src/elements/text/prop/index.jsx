import React from 'react';
import { Input } from 'antd';

export default (props) => {
  const { element, onChange } = props;

  return (
    <Input.TextArea
      value={element.props.value}
      onChange={e => onChange('props.value', e.target.value)}
    />
  )
}