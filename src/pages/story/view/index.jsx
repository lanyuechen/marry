import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import View from '@/components/view';
import Icon from '@/components/icon';
import Toolbox from '@/components/toolbox';
import PageHeader from '@/components/page-header';
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

  const handleEdit = async () => {
    history.push(`/story/${id}/editor`);
  }

  return (
    <>
      <PageHeader title={data.name} />
      <View data={data} />

      <Toolbox>
        <Button shape="circle" onClick={handleEdit}>
          <Icon type="icon-edit" />
        </Button>
      </Toolbox>
    </>
  );
}
