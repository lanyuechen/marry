import React from 'react';

import style from './style.css';

export default (props) => {
  const { background, children } = props;
  return (
    <div
      className={style.container}
      style={{ background }}
    >
      {children}
    </div>
  );
}