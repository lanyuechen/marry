// 透镜，用于缩小或放大元素

import React from 'react';

import style from './style.less';

export default (props) => {
  const { children, scale = 1 } = props;
  return (
    <div className={style.lens}>
      <div
        style={{
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
          transform: `scale(${scale})`,
          transformOrigin: '0 0',
        }}
      >
        {children}
      </div>
    </div>
  )
}