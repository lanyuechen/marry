import React, { useMemo } from 'react';
import { Drawer } from 'antd';
import { prepareElement } from '@/utils/prepare';

import ImageProp from '@/components/elements/image/prop';
import TextProp from '@/components/elements/text/prop';
import IconProp from '@/components/elements/icon/prop';

import PageProp from './page-prop';

import style from './style.less';

const PROP_FORMS = {
  image: ImageProp,
  text: TextProp,
  icon: IconProp,
};

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