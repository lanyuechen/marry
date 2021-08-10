import React from 'react';
import { Row, Col } from 'antd';
import { history } from 'umi';
import Container from '@/components/container';
import Card from '@/components/card';
import templates from './templates';

export default () => {

  const handleLink = async (id) => {
    history.push(`/templates/${id}`);
  }

  return (
    <Container>
      <Row gutter={[16, 16]}>
        {templates.map(d => (
          <Col key={d._id} span={8}>
            <Card
              hoverable
              onClick={() => handleLink(d._id)}
            >
              
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
