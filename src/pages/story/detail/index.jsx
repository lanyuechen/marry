import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import PageHeader from '@/components/page-header';
import Banner from '@/components/banner';
import Gallery from '@/components/gallery';
import * as storyService from '@/services/story';

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
      <Banner
        title={data.name}
        description={data.description}
        cover={data.cover}
        extra={[
          <Button type="primary" size="small" ghost onClick={handleView}>预览</Button>,
          <Button type="primary" size="small" ghost onClick={handleEdit}>编辑</Button>,
        ]}
      />
      <Gallery pages={data.pages} />
    </div>
  );
}