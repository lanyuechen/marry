import React from 'react';

import style from './style.css';

export default (props) => {
  const { background, style: propStyle = {}, children } = props;
  return (
    <div
      className={style.container}
      style={{ background, ...propStyle }}
    >
      {children}
    </div>
  );
}