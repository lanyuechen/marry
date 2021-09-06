import React from 'react';

import style from './style.less';

export default function(props) {
  return (
    <div className={style.container} {...props}>
      {props.children}
    </div>
  );
}
