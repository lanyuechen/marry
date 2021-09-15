import React, { useState, useEffect } from 'react';
import View from '@/components/view';
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

  return (
    <>
      <PageHeader title={data.name} />
      <View data={data} />
    </>
  );
}
