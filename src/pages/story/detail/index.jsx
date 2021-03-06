import React, { useEffect, useState, useMemo } from 'react';
import { history } from 'umi';
import { Button, Popconfirm, Affix } from 'antd';
import produce, { setAutoFreeze } from "immer";
import { set } from 'lodash';
import { MenuOutlined } from '@ant-design/icons';
import PageHeader from '@/components/page-header';
import Banner from '@/components/banner';
import Gallery from '@/components/gallery';
import Resource from '@/components/resource';
import ElementConfig from '@/components/element-config';
import StoryConfig from '@/components/story-config';
import * as storyService from '@/services/story';

setAutoFreeze(false);

export default (props) => {
  const { id } = props.match.params;
  const [data, setData] = useState(history.location.state);
  const [{ pageIdx, elementIdx }, setIdx] = useState({ pageIdx: 0, elementIdx: 0 });
  const [storyConfigVisible, setStoryConfigVisible] = useState(false);

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
  }, [pageIdx, elementIdx]);

  if (!data) {
    return null;
  }

  const handleView = () => {
    history.push(`/story/${id}/view`);
  }

  const handleRemove = () => {
    storyService.remove(id).then(res => {
      if (res.success) {
        history.replace(`/story`);
      }
    });
  }

  const handleSlideChange = (pageIdx, elementIdx) => {
    setIdx({ pageIdx, elementIdx });
  }

  const handleChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : [...key];
    const newData = produce(data, (draft) => {
      set(draft, key, value);
    });
    storyService.update(id, newData).then(res => {
      if (res.success) {
        setData(newData);
      }
    });
  }

  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      <PageHeader
        title={data.name}
        extra={[
          <Button
            key="config"
            type="link"
            icon={<MenuOutlined />}
            onClick={() => setStoryConfigVisible(true)}
          />,
        ]}
        onBack={() => history.replace(`/story`)}
      />
      <Banner
        title={data.name}
        description={data.description}
        cover={data.cover}
        extra={[
          <Popconfirm
            key="remove"
            title="???????????????????????????????????????????????????"
            okText="???"
            cancelText="?????????"
            onConfirm={handleRemove}
          >
            <Button danger size="small" ghost>??????</Button>
          </Popconfirm>,
          <Button key="view" type="primary" size="small" ghost onClick={handleView}>??????</Button>,
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
      <ElementConfig
        data={data}
        pageIdx={pageIdx}
        elementIdx={elementIdx}
        onChange={handleChange}
      />
      <StoryConfig
        data={data}
        visible={storyConfigVisible}
        onChange={handleChange}
        onClose={() => setStoryConfigVisible(false)}
      />
    </div>
  );
}