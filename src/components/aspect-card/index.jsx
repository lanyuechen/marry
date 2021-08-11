import React from 'react';
import style from './style.less';

export default (props) => {
  const { aspect = 0.618, width, children } = props;

  return (
    <div className={style.container} style={{ width }}>
      <div className={style.back} style={{paddingBottom: `${aspect * 100}%`}} />
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}