import React from 'react';
import { Card, Form, Slider } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import ImageCrop from './image-crop';

import CLIP_PATH from '@/assets/clip-path.json';

import style from './style.less';

const FRAMES = ['burrs'];

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
          <Card>
            <Card.Grid
              className={style.grid}
              style={{
                background: !element.frame?.type ? '#f0f0f0' : '',
              }}
              onClick={() => onChange('clip.type', '')}
            >
              <StopOutlined style={{fontSize: 18}} />
            </Card.Grid>
            {FRAMES.map(frame => (
              <Card.Grid
                key={frame}
                className={style.grid}
                style={{
                  background: frame === element.frame.type ? '#f0f0f0' : '',
                }}
                onClick={() => onChange('frame.type', frame)}
              >
                {frame}
              </Card.Grid>
            ))}
          </Card>
        </Form.Item>
        <Form.Item label="裁剪">
          <Slider
            value={element.clip.scale}
            min={0.1}
            max={2}
            step={0.1}
            onChange={val => onChange('clip.scale', val)}
          />
          <Card>
            <Card.Grid
              className={style.grid}
              style={{
                background: !element.clip?.type ? '#f0f0f0' : '',
              }}
              onClick={() => onChange('clip.type', '')}
            >
              <StopOutlined style={{fontSize: 18}} />
            </Card.Grid>
            {Object.entries(CLIP_PATH).map(([key, path]) => (
              <Card.Grid
                key={key}
                className={style.grid}
                style={{
                  background: key === element.clip.type ? '#f0f0f0' : ''
                }}
                onClick={() => onChange('clip.type', key)}
              >
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <path d={path} />
                </svg>
              </Card.Grid>
            ))}
          </Card>
        </Form.Item>
      </Form>
    </Card>
  );
}