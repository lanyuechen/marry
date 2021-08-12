import React, { useMemo } from 'react';
import { Drawer, Tabs } from 'antd';
import { prepareElement } from '@/utils/prepare';

import ImageProp from '@/components/elements/image/prop';
import TextProp from '@/components/elements/text/prop';
import IconProp from '@/components/elements/icon/prop';

import GlobalProp from './global-prop';
import PageProp from './page-prop';

import style from './style.less';

const PROP_FORMS = {
  image: ImageProp,
  text: TextProp,
  icon: IconProp,
};

export default (props) => {
  const { data, pageIdx, elementIdx, onChange, onClose } = props;

  const handleChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(key, {$set: value});
  }

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
      width="90%"
      visible={elementIdx > -1}
      onClose={onClose}
    >
      <Tabs>
        {element && PropForm && (
          <Tabs.TabPane tab="元素配置" key="element">
            <PropForm
              element={element}
              onChange={handleElementChange}
            />
          </Tabs.TabPane>)
        }
        <Tabs.TabPane tab="页面配置" key="page">
          <PageProp
            page={data.pages[pageIdx]}
            onChange={handlePageChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="全局配置" key="global">
          <GlobalProp
            data={data}
            onChange={handleChange}
          />
        </Tabs.TabPane>
      </Tabs>
    </Drawer>
  )
}