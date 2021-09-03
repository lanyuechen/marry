import React, { useState, useEffect } from 'react';
import View from '@/components/view';
import PageHeader from '@/components/page-header';
import { fetchData } from '@/utils/utils';

export default (props) => {
  const { id } = props.match.params;
  const [ data, setData ] = useState();

  useEffect(() => {
    fetchData(id).then(res => {
      setData(res);
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
  )
}
