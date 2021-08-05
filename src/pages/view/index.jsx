import React, { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
import { history } from 'umi';
import View from '@/components/view';
import Icon from '@/components/icon';
import * as storyService from '@/services/story';

import style from './style.less';

export default (props) => {
  const { id } = props.match.params;
  const [ data, setData ] = useState();

  useEffect(() => {
    storyService.detail(id).then(res => {
      if(res.success) {
        setData(res.data);
      }
    });
  }, [id]);

  if (!data) {
    return null;
  }

  const handleBack = () => {
    history.goBack();
  }

  const handleEdit = async () => {
    history.push(`/editor/${id}`);
  }

  return (
    <>
      <View data={data} />

      <Space className={style.tool} direction="vertical">
        <Button shape="circle" onClick={handleBack}>
          <Icon type="icon-back" />
        </Button>
        <Button shape="circle" onClick={handleEdit}>
          <Icon type="icon-edit" />
        </Button>
      </Space>
    </>
  );
}
