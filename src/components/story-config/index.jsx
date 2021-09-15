import React from 'react';
import { Drawer } from 'antd';

import GlobalProp from './global-prop';

import style from './style.less';

export default (props) => {
  const { data, visible, onChange, onClose } = props;

  const handleChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(key, {$set: value});
  }

  return (
    <Drawer
      className={style.drawer}
      title="配置"
      width="90%"
      visible={visible}
      onClose={onClose}
    >
      <GlobalProp
        data={data}
        onChange={handleChange}
      />
    </Drawer>
  )
}