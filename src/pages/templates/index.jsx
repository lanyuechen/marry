import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { history } from 'umi';
import * as service from './service';

import './style.css';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await service.list();
    setData(res.data);
  }

  const handleLink = async (id) => {
    const tplId = await service.clone(id);
    history.push(`/editor/${tplId}`);
  }

  return (
    <div className="templates-container">
      <Row gutter={[16, 16]}>
        {data.map(d => (
          <Col key={d.id} span={12}>
            <Card
              hoverable
              cover={<img src={d.cover} />}
              onClick={() => handleLink(d.id)}
            >
              <Card.Meta title={d.title} description={d.desc} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
