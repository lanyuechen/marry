import React, { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
import { history } from 'umi';
import View from '@/components/view';

import { getTemplate } from '@/utils/utils';

import * as service from '../service';

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
    const newId = await service.clone(id);
    history.push(`/editor/${newId}`);
  }

  return (
    <>
      {/* <View data={data} /> */}

      <Space className={style.tool} direction="vertical">
        <Button shape="circle" onClick={handleBack}>
          <span className="icon icon-back" />
        </Button>
        <Button shape="circle" onClick={handleEdit}>
          <span className="icon icon-edit" />
        </Button>
      </Space>
    </>
  )
}
