import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import PropForm from './prop';

import style from './style.less';

const AntIcon = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_2724754_rcmb540ie.js',
  ]
});

const Icon = (props) => {
  const { type, size } = props;
  return (
    <div className={style.container}>
      <AntIcon
        type={`icon-${type}`}
        style={{
          fontSize: Math.min(size[0], size[1]),
        }}
      />
    </div>
  );
}

Icon.PropForm = PropForm;

export default Icon;