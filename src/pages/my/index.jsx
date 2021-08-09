import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { history } from 'umi';
import Container from '@/components/container';
import * as storyService from '@/services/story';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await storyService.list();
    if (res.success) {
      setData(res.data);
    }
  }

  const handleView = async (id) => {
    history.push(`/view/${id}`);
  }

  return (
    <Container>
      <Row gutter={[16, 16]}>
        {data.map(d => (
          <Col key={d._id} span={8}>
            <Card
              hoverable
              cover={<img src={d.cover} />}
              onClick={() => handleView(d._id)}
            >
              <Card.Meta title={d.name} description={d.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
