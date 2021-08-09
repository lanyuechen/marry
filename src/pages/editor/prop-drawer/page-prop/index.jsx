import React from 'react';
import { Divider, Form, Collapse } from 'antd';

export default (props) => {
  const { page, onChange } = props;

  return (
    <Form>
      <Collapse
        ghost
        expandIconPosition="right"
        defaultActiveKey={['basic']}
      >
        <Collapse.Panel header={<Divider plain>基础配置</Divider>} key="basic">
          <Form.Item label="页面背景">
            <input
              type="color"
              style={{width: 32, height: 32}}
              value={page.background}
              onChange={e => onChange('background', e.target.value)}
            />
          </Form.Item>
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}