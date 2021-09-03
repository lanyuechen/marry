import React, { useState, useEffect } from 'react';
import View from '@/components/view';
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
    <View data={data} />
  );
}
