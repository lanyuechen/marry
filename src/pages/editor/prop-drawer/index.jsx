import React, { useMemo } from 'react';
import { Drawer } from 'antd';
import { prepareElement } from '@/utils/prepare';

import StoryProp from './story-prop';
import PageProp from './page-prop';
import ImageProp from './image-prop';
import TextProp from './text-prop';
import IconProp from './icon-prop';

import style from './style.less';

const PROP_FORMS = {
  image: ImageProp,
  text: TextProp,
  icon: IconProp,
};

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
    const ele = data.pages[pageIdx]?.elements?.[elementIdx];
    return ele && prepareElement(ele);
  }, [data, pageIdx, elementIdx]);

  const PropForm = useMemo(() => {
    if (element) {
      return PROP_FORMS[element.type];
    }
  }, [element]);

  return (
    <Drawer
      className={style.drawer}
      title="编辑"
      width="90%"
      visible={elementIdx > -1}
      onClose={onClose}
    >
      <StoryProp
        data={data}
        onChange={onChange}
      />
      <PageProp
        page={data.pages[pageIdx]}
        onChange={handlePageChange}
      />
      {element && PropForm && (
        <PropForm
          element={element}
          onChange={handleElementChange}
        />
      )}
    </Drawer>
  )
}