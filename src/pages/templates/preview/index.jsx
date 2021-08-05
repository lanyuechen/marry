import React, { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
import { history } from 'umi';
import View from '@/components/view';
import Icon from '@/components/icon';
import { getTemplate } from '@/utils/utils';
import * as storyService from '@/services/story';

import style from './style.less';

export default (props) => {
  const { id } = props.match.params;
  const [ data, setData ] = useState();

  useEffect(() => {
    getTemplate(id).then(res => {
      setData(res);
    });
  }, [id]);

  if (!data) {
    return null;
  }

  const handleBack = () => {
    history.goBack();
  }

  const handleEdit = async () => {
    const res = await storyService.insert(data);
    if (res.success) {
      history.push(`/editor/${res.data._id}`);
    }
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
  )
}
