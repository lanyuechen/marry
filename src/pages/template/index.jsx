import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { history } from 'umi';
import Container from '@/components/container';
import Cover from '@/components/cover';
import { fetchData } from '@/utils/utils';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('index').then(res => {
      setData(res);
    });
  }, []);

  const handleLink = async (item) => {
    history.push({
      pathname: `/template/${item._id}`,
      state: item
    });
  }

  return (
    <Container>
      <Row gutter={[16, 16]}>
        {data.map(d => (
          <Col key={d._id} span={12}>
            <Cover
              cover={d.cover}
              onClick={() => handleLink(d)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
