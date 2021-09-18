import React from 'react';

import style from './style.less';

const GridSelect = (props) => {
  const { children, active, ...otherProps } = props;
  return (
    <div
      className={`${style.option} ${active ? style.active : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default GridSelect;