import React from 'react';
import { history } from 'umi';
import { PageHeader } from 'antd';

import style from './style.less';

export default (props) => {

  const handleBack = () => {
    history.goBack();
  }

  return (
    <PageHeader
      className={style.header}
      onBack={handleBack}
      backIcon={props.showBack}
      {...props}
    />
  );
}