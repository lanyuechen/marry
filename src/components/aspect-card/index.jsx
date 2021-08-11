import React from 'react';
import style from './style.less';

export default (props) => {
  const { aspect = 0.618, children } = props;

  return (
    <div className={style.container}>
      <div className={style.back} style={{paddingBottom: `${aspect * 100}%`}} />
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}