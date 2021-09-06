import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { history } from 'umi';
import Container from '@/components/container';
import Cover from '@/components/cover';
import PageHeader from '@/components/page-header';
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

  const handleLink = async (item) => {
    history.push({
      pathname: `/story/${item._id}`,
      state: item
    });
  }

  return (
    <Container style={{paddingTop: 56}}>
      <PageHeader title="我的请柬" showBack={false} />
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
  );
}
