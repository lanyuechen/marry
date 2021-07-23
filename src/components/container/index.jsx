import React from 'react';

import style from './style.css';

export default function(props) {
  return (
    <div className={style.container}>
      {props.children}
    </div>
  );
}
