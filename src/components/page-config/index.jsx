import React from 'react';
import { Drawer } from 'antd';

import PageProp from './page-prop';

import style from './style.less';

export default (props) => {
  const { data, visible, pageIdx, onChange, onClose } = props;

  const handlePageChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(['pages', pageIdx, ...key], {$set: value});
  }

  return (
    <Drawer
      className={style.drawer}
      title="配置"
      width="90%"
      visible={visible}
      onClose={onClose}
    >
      <PageProp
        page={data.pages[pageIdx]}
        onChange={handlePageChange}
      />
    </Drawer>
  )
}