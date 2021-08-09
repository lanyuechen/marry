import React from 'react';
import { Form, Divider, Input, Radio, Checkbox, Select, Upload, Button, Collapse } from 'antd';
import Icon from '@/components/icon';

export default (props) => {
  const { data, onChange } = props;

  return (
    <Form>
      <Collapse
        ghost
        expandIconPosition="right"
        defaultActiveKey={['basic']}
      >
        <Collapse.Panel header={<Divider plain>基础配置</Divider>} key="basic">
          <Form.Item label="名称">
            <Input
              value={data.name}
              onChange={e => onChange('name', e.target.value)}
              placeholder="请输入名称"
            />
          </Form.Item>
          <Form.Item label="描述">
            <Input.TextArea
              value={data.description}
              onChange={e => onChange('description', e.target.value)}
              placeholder="请输入描述信息"
            />
          </Form.Item>
        </Collapse.Panel>
        <Collapse.Panel header={<Divider plain>背景音乐</Divider>} key="audio">
          <Form.Item>
            <Upload>
              <Button icon={<Icon type="icon-music" />}>选择背景音乐</Button>
            </Upload>
          </Form.Item>
        </Collapse.Panel>
        <Collapse.Panel header={<Divider plain>页面过渡</Divider>} key="transition">
          <Form.Item label="过渡方向">
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              value={data.transition?.direction || 'horizontal'}
              onChange={e => onChange('transition.direction', e.target.value)}
            >
              <Radio.Button value="horizontal">水平</Radio.Button>
              <Radio.Button value="vertical">垂直</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="过渡效果">
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
              onChange={e => onChange('transition.duration', e.target.value && parseInt(e.target.value))}
              addonBefore={<Checkbox checked={data.transition.autoPlay} onChange={e => onChange('transition.autoPlay', e.target.checked)} />}
              placeholder="请输入切换间隔时间"
              suffix="ms"
            />
          </Form.Item>
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}
