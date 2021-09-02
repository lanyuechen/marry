import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Typography, Space, Button } from 'antd';
import Icon from '@/components/icon';
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
    fetchData(id).then(res => {
      setData(res);
    });
  }, [id]);

  if (!data) {
    return null;
  }

  const handlePreview = () => {
    history.push(`/templates/${id}/view`);
  }

  const handleEdit = async () => {
    const res = await storyService.insert(data);
    if (res.success) {
      history.push(`/editor/${res.data._id}`);
    }
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
            <Space style={{float: 'right'}}>
              <Button shape="circle" onClick={handlePreview}>
                <Icon type="icon-view" />
              </Button>
              <Button shape="circle" onClick={handleEdit}>
                <Icon type="icon-edit" />
              </Button>
            </Space>
          </div>
        </div>
      </div>
      <div>
        <Gallery pages={data.pages} />
      </div>
    </div>
  );
}