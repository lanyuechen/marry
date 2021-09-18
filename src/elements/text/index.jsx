import React from 'react';
import PropForm from './prop';

import style from './style.less';

const Text = (props) => {
  const { value } = props;
  return (
    <div className={style.container}>
      {value}
    </div>
  );
}

Text.PropForm = PropForm;

export default Text;