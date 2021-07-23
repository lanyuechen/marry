import React, { useState, useEffect } from 'react';

import View from '@/components/view';

import * as service from './service';

export default (props) => {
  const { id } = props.match.params;
  const [ data, setData ] = useState();

  useEffect(() => {
    service.getTemplate(id).then(res => {
      setData(res);
    });
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <View data={data} />
  );
}
