import React, { useEffect, useState, useMemo } from 'react';
import { history } from 'umi';
import { Button, Popconfirm, Affix } from 'antd';
import update from 'immutability-helper';
import PageHeader from '@/components/page-header';
import Banner from '@/components/banner';
import Gallery from '@/components/gallery';
import Resource from '@/components/resource';
import ResourceConfig from '@/components/resource-config';
import * as storyService from '@/services/story';

export default (props) => {
  const { id } = props.match.params;
  const [data, setData] = useState(history.location.state);
  const [pageIdx, setPageIdx] = useState(0);
  const [elementIdx, setElementIdx] = useState(0);

  useEffect(() => {
    storyService.detail(id).then(res => {
      if (res.success) {
        setData(res.data);
      }
    });
  }, [id]);

  const elementGlobalIdx = useMemo(() => {
    if (!data || !data.pages) {
      return 0;
    }
    let idx = elementIdx;
    for (let i = 0; i < pageIdx; i++) {
      if (data.pages[i].elements) {
        idx += data.pages[i].elements.length;
      }
    }
    return idx;
  }, [data?.pages, pageIdx, elementIdx]);

  if (!data) {
    return null;
  }

  const handleView = () => {
    history.push(`/story/${id}/view`);
  }

  const handleEdit = async () => {
    history.push(`/story/${id}/editor`);
  }

  const handleRemove = () => {
    storyService.remove(id).then(res => {
      if (res.success) {
        history.replace(`/story`);
      }
    });
  }

  const handleSlideChange = (pageIdx, elementIdx) => {
    setPageIdx(pageIdx);
    setElementIdx(elementIdx);
  }

  const handleChange = (key, spec) => {
    key = typeof key === 'string' ? key.split('.') : [...key];
    spec = key.reverse().reduce((p, n) => ({[n]: p}), spec);
    const newData = update(data, spec);
    storyService.update(id, newData).then(res => {
      if (res.success) {
        setData(newData);
      }
    });
  }

  return (
    <div style={{height: '100%', overflow: 'auto'}}>
      <PageHeader title={data.name} />
      <Banner
        title={data.name}
        description={data.description}
        cover={data.cover}
        extra={[
          <Popconfirm
            key="remove"
            title="覆水难收，你确定要删除这个请柬吗？"
            okText="嗯"
            cancelText="算了吧"
            onConfirm={handleRemove}
          >
            <Button danger size="small" ghost>删除</Button>
          </Popconfirm>,
          <Button key="view" type="primary" size="small" ghost onClick={handleView}>预览</Button>,
          <Button key="deit" type="primary" size="small" ghost onClick={handleEdit}>编辑</Button>,
        ]}
      />
      <Gallery
        pages={data.pages}
        activeIndex={pageIdx}
        onSlideChange={handleSlideChange}
      />
      <Affix offsetTop={0}>
        <Resource
          pages={data.pages}
          activeIndex={elementGlobalIdx}
          onSlideChange={handleSlideChange}
        />
      </Affix>
      <ResourceConfig
        data={data}
        pageIdx={pageIdx}
        elementIdx={elementIdx}
        onChange={handleChange}
      />
    </div>
  );
}