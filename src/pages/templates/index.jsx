import React from 'react';
import { Row, Col, Card } from 'antd';
import { history } from 'umi';
import Container from '@/components/container';
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
              cover={<img src={d.cover} />}
              onClick={() => handleLink(d._id)}
            >
              <Card.Meta title={d.name} description={d.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
