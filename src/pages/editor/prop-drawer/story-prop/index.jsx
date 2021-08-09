import React from 'react';
import { Form, Divider, Input, Radio, Checkbox, Select, Switch } from 'antd';

export default (props) => {
  const { data, onChange } = props;

  return (
    <Form>
      <Divider orientation="left" plain>
        基础配置
      </Divider>
      <Form.Item label="名称">
        <Input
          value={data.name}
          onChange={e => onChange('name', e.target.value)}
        />
      </Form.Item>
      <Form.Item label="描述">
        <Input.TextArea
          value={data.description}
          onChange={e => onChange('description', e.target.value)}
        />
      </Form.Item>
      <Divider orientation="left" plain>
        背景音乐
      </Divider>
      <Form.Item label="背景音乐">
        
      </Form.Item>
      <Divider orientation="left" plain>
        页面过度
      </Divider>
      <Form.Item label="过度方向">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={data.transition?.direction || 'horizontal'}
          onChange={e => onChange('transition.direction', e.target.value)}
        >
          <Radio value="horizontal">水平</Radio>
          <Radio value="vertical">垂直</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="过度效果">
        <Select
          value={data.transition?.effect || 'slide'}
          onChange={v => onChange('transition.effect', v)}
        >
          <Select.Option value="slide">滑动</Select.Option>
          <Select.Option value="fade">淡入/淡出</Select.Option>
          <Select.Option value="cube">方块</Select.Option>
          <Select.Option value="coverflow">3D流</Select.Option>
          <Select.Option value="flip">3d翻转</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="自动切换">
        <Input
          value={data.transition?.duration}
          onChange={e => onChange('transition.duration', parseInt(e.target.value))}
          addonBefore={<Checkbox checked={data.transition.autoPlay} onChange={e => onChange('transition.autoPlay', e.target.checked)} />}
          suffix="ms"
        />
      </Form.Item>
    </Form>
  )
}
