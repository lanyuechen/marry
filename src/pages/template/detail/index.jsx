import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import PageHeader from '@/components/page-header';
import Banner from '@/components/banner';
import Gallery from '@/components/gallery';
import { fetchData } from '@/utils/utils';
import * as storyService from '@/services/story';

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

  const handleView = () => {
    history.push(`/template/${id}/view`);
  }

  const handleEdit = async () => {
    const res = await storyService.insert(data);
    if (res.success) {
      history.push(`/story/${res.data._id}/editor`);
    }
  }

  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      <PageHeader title={data.name} />
      <Banner
        title={data.name}
        description={data.description}
        cover={data.cover}
        extra={[
          <Button key="buy" danger size="small" ghost>¥9.9 购买</Button>,
          <Button key="view" type="primary" size="small" ghost onClick={handleView}>预览</Button>,
          <Button key="edit" type="primary" size="small" ghost onClick={handleEdit}>编辑</Button>,
        ]}
      />
      <Gallery pages={data.pages} />
    </div>
  );
}