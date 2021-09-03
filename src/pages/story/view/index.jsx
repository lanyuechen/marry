import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import View from '@/components/view';
import Icon from '@/components/icon';
import Toolbox from '@/components/toolbox';
import * as storyService from '@/services/story';

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
    history.push(`/story/${id}/editor`);
  }

  return (
    <>
      <View data={data} />

      <Toolbox>
        <Button shape="circle" onClick={handleBack}>
          <Icon type="icon-back" />
        </Button>
        <Button shape="circle" onClick={handleEdit}>
          <Icon type="icon-edit" />
        </Button>
      </Toolbox>
    </>
  );
}
