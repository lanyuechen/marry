import React, { useState } from 'react';

import GridSelect from '@/components/grid-select';
import { StopOutlined } from '@ant-design/icons';
import Frame from '@/components/frame';
import Lens from '@/components/lens';
import CLIP_PATH from '@/assets/clip-path.json';

const FRAMES = ['burrs'];

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
        {FRAMES.map(frame => (
          <GridSelect.Option key={frame} style={{height: 120}}>
            <Lens scale={0.5}>
              <Frame type={frame} />
            </Lens>
          </GridSelect.Option>
        ))}
      </GridSelect>
      
      {/* <GridSelect
        value={''}
        column={5}
      >
        <GridSelect.Option key="">
          <StopOutlined style={{fontSize: 18}} />
        </GridSelect.Option>
        {Object.entries(CLIP_PATH).map(([key, path]) => (
          <GridSelect.Option key={key}>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <path d={path} />
            </svg>
          </GridSelect.Option>
        ))}
      </GridSelect> */}
    </div>
  );
}
