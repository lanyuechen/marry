import React, { useState } from 'react';

import GridSelect from '@/components/grid-select';
import { StopOutlined } from '@ant-design/icons';
import Frame, { FRAMES } from '@/components/frame';
import Lens from '@/components/lens';

export default () => {
  const [selected, setSelected] = useState('a');
  const handleChange = (key) => {
    setSelected(key);
  }

  return (
    <div>
      <GridSelect
        column={2}
      >
        <GridSelect.Option key="">
          <StopOutlined style={{fontSize: 18}} />
        </GridSelect.Option>
        {Object.keys(FRAMES).map(key => (
          <GridSelect.Option key={key} style={{height: 120}}>
            <Lens scale={0.5}>
              <Frame type={key}>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
              </Frame>
            </Lens>
          </GridSelect.Option>
        ))}
      </GridSelect>
    </div>
  );
}
