import React from 'react';
import { Card, Form, Tabs } from 'antd';
import ImageCrop from './image-crop';
import CLIPS from '@/constants/clip';

import style from './style.less';

const FRAMES = ['null', 'burrs'];

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
          {FRAMES.map(frame => (
            <Card.Grid key={frame} className={style.grid} onClick={() => onChange('frame.type', frame)}>
              {frame}
            </Card.Grid>
          ))}
        </Form.Item>
        <Form.Item label="裁剪">
          {Object.entries(CLIPS).map(([key, path]) => (
            <Card.Grid key={key} className={style.grid} onClick={() => onChange('clip.type', key)}>
              {key}
            </Card.Grid>
          ))}
        </Form.Item>
      </Form>
    </Card>
  );
}