import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Typography } from 'antd';
import Cover from '@/components/cover';
import { getTemplate } from '@/utils/utils';

import style from './style.less';

export default (props) => {
  const { id } = props.match.params;
  const [data, setData] = useState(history.location.state);

  useEffect(() => {
    getTemplate(id).then(res => {
      setData(res);
    });
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className={style.banner}>
        <img className={style.bg} src={data.cover} />
        <div className={style.content}>
          <div className={style.pic}>
            <Cover cover={data.cover} />
          </div>
          <div className={style.info}>
            <Typography.Title level={4}>{data.name}</Typography.Title>
            <Typography.Paragraph ellipsis={{ rows: 5 }}>
              {data.description}
            </Typography.Paragraph>
          </div>
        </div>
      </div>
      {data && (
        <div>
          xxx
        </div>
      )}
    </div>
  );
}