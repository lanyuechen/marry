import React from 'react';

import style from './style.less';

export default (props) => {
  const { value } = props;
  return (
    <div className={style.container}>
      {value}
    </div>
  );
}