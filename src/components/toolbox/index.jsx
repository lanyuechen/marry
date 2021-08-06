import React from 'react';
import { Space } from 'antd';

import style from './style.less';

export default (props) => {

  return (
    <Space className={style.tool} direction="vertical">
      {props.children}
    </Space>
  );
}
