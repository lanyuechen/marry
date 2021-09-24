import React from 'react';
import { Card, Form, Slider } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import GridSelect from '@/components/grid-select';
import Frame, { FRAMES } from '@/components/frame';
import Lens from '@/components/lens';
import CLIP_PATH from '@/assets/clip-path.json';

import ImageCrop from './image-crop';

export default (props) => {
  const { element, onChange } = props;

  return (
    <Card>
      <Form>
        {/* <Form.Item label="上传图片">
          <Upload>
            <Button>上传图片</Button>
          </Upload>
        </Form.Item> */}
        <Form.Item label="图片调整">
          <ImageCrop
            src={element.props.src}
            aspect={element.size[0] / element.size[1]}
            crop={element.props.crop}
            onChange={crop => onChange('props.crop', crop)}
          />
        </Form.Item>
        <Form.Item label="边框">
          <Slider
            value={element.clip?.scale}
            min={0}
            max={1}
            step={0.01}
            onChange={val => onChange('frame.borderRadius', val)}
          />
          <GridSelect
            value={element.frame?.type}
            column={2}
            onChange={(val) => onChange('frame.type', val)}
          >
            <GridSelect.Option key="">
              <StopOutlined style={{fontSize: 18}} />
            </GridSelect.Option>
            {Object.keys(FRAMES).map((key) => (
              <GridSelect.Option key={key} style={{height: 120}}>
                <Lens scale={0.5}>
                  <Frame type={key} />
                </Lens>
              </GridSelect.Option>
            ))}
          </GridSelect>
        </Form.Item>
        <Form.Item label="裁剪">
          <Slider
            value={element.clip?.scale}
            min={0.1}
            max={3}
            step={0.1}
            onChange={val => onChange('clip.scale', val)}
          />
          <GridSelect
            value={element.clip?.type}
            column={5}
            onChange={(val) => onChange('clip.type', val)}
          >
            <GridSelect.Option key="">
              <StopOutlined style={{fontSize: 18}} />
            </GridSelect.Option>
            {Object.entries(CLIP_PATH).map(([key, path]) => (
              <GridSelect.Option key={key}>
                <svg viewBox="0 0 1024 1024" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <path d={path} />
                </svg>
              </GridSelect.Option>
            ))}
          </GridSelect>
        </Form.Item>
      </Form>
    </Card>
  );
}