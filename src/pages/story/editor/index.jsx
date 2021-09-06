import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';
import { Button } from 'antd';
import { history } from 'umi';
import View from '@/components/view';
import Icon from '@/components/icon';
import Toolbox from '@/components/toolbox';
import PageHeader from '@/components/page-header';

import PropDrawer from './prop-drawer';

import * as storyService from '@/services/story';

export default (props) => {
  const { id } = props.match.params;
  const [ currentPageIdx, setCurrentPageIdx ] = useState(0);
  const [ currentElementIdx, setCurrentElementIdx ] = useState(-1);
  const [ data, setData ] = useState();

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

  const showPropDrawer = (pageIdx, elementIdx) => {
    setCurrentPageIdx(pageIdx);
    setCurrentElementIdx(elementIdx);
  }

  const hidePropDrawer = () => {
    setCurrentElementIdx(-1);
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

  const handleView = async () => {
    history.push(`/view/${id}`);
  }

  return (
    <>
      <PageHeader title={data.name} />
      <PropDrawer
        data={data}
        pageIdx={currentPageIdx}
        elementIdx={currentElementIdx}
        onChange={handleChange}
        onClose={hidePropDrawer}
      />
      <View
        editable
        data={data}
        onEdit={showPropDrawer}
      />

      <Toolbox>
        <Button shape="circle" onClick={handleView}>
          <Icon type="icon-view" />
        </Button>
      </Toolbox>
    </>
  )
}
