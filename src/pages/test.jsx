import React, { useState } from 'react';

import GridSelect from '@/components/grid-select';

export default () => {
  const [selected, setSelected] = useState('a');
  const handleChange = (key) => {
    setSelected(key);
  }

  return (
    <div>
      <GridSelect
        style={{width: 200}}
        value={selected}
        onChange={handleChange}
      >
        <GridSelect.Option style={{width: '20%'}} key="a">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="b">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="c">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="d">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="e">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="f">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="g">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="h">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="i">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="j">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="k">test</GridSelect.Option>
        <GridSelect.Option style={{width: '20%'}} key="l">test</GridSelect.Option>
      </GridSelect>
    </div>
  );
}
