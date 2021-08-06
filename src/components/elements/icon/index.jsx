import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

import style from './style.less';

export const Icon = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_2724754_rcmb540ie.js',
  ]
});

export default (props) => {
  const { type, size } = props;
  return (
    <div className={style.container}>
      <Icon
        type={`icon-${type}`}
        style={{
          fontSize: Math.min(size[0], size[1]),
        }}
      />
    </div>
  );
}