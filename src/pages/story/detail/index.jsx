import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Typography, Space, Button } from 'antd';
import Cover from '@/components/cover';
import PageHeader from '@/components/page-header';
import Gallery from '@/components/gallery';
import { fetchData } from '@/utils/utils';
import * as storyService from '@/services/story';

import style from './style.less';

export default (props) => {
  const { id } = props.match.params;
  const [data, setData] = useState(history.location.state);

  useEffect(() => {
    storyService.detail(id).then(res => {
      if (res.success) {
        setData(res.data);
      }
    });
  }, [id]);

  if (!data) {
    return null;
  }

  const handleView = () => {
    history.push(`/story/${id}/view`);
  }

  const handleEdit = async () => {
    history.push(`/story/${id}/editor`);
  }

  return (
    <div>
      <PageHeader title={data.name} />
      <div className={style.banner}>
        <img className={style.bg} src={data.cover} />
        <div className={style.content}>
          <div className={style.pic}>
            <Cover cover={data.cover} />
          </div>
          <div className={style.info}>
            <Typography.Title level={5}>{data.name}</Typography.Title>
            <Typography.Paragraph ellipsis={{ rows: 4 }}>
              {data.description}
            </Typography.Paragraph>
            <Space className={style.tool}>
              <Button type="primary" size="small" ghost onClick={handleView}>
                预览
              </Button>
              <Button type="primary" size="small" ghost onClick={handleEdit}>
                编辑
              </Button>
            </Space>
          </div>
        </div>
      </div>
      <div className={style.gallery}>
        <Gallery pages={data.pages} />
      </div>
    </div>
  );
}