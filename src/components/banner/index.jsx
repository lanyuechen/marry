import React from 'react';
import { Typography, Space } from 'antd';
import Cover from '@/components/cover';

import style from './style.less';

export default (props) => {
  const { title, description, cover, extra } = props;

  return (
    <div className={style.banner}>
      <img className={style.bg} src={cover} />
      <div className={style.content}>
        <div className={style.pic}>
          <Cover cover={cover} />
        </div>
        <div className={style.info}>
          <Typography.Title level={5}>{title}</Typography.Title>
          <Typography.Paragraph ellipsis={{ rows: 4 }}>
            {description}
          </Typography.Paragraph>
          <Space className={style.tool}>
            {extra}
          </Space>
        </div>
      </div>
    </div>
  );
}