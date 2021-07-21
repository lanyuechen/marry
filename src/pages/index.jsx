import React from 'react';
import { Card } from 'antd';

import style from './style.less';

export default function() {
  return (
    <div>
      <Card>
        <Card.Grid className={style.cardGrid} hoverable={false}>首页</Card.Grid>
        <Card.Grid className={style.cardGrid} hoverable={false}>模板</Card.Grid>
        <Card.Grid className={style.cardGrid} hoverable={false}>Content</Card.Grid>
        <Card.Grid className={style.cardGrid} hoverable={false}>我的</Card.Grid>
      </Card>
    </div>
  );
}
