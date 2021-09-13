import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { history } from 'umi';
import Container from '@/components/container';
import Cover from '@/components/cover';
import PageHeader from '@/components/page-header';
import { fetchData } from '@/utils/utils';

import data from '@/../public/templates/index.json';

export default () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData('index').then(res => {
  //     setData(res);
  //   });
  // }, []);

  const handleLink = async (item) => {
    history.push({
      pathname: `/template/${item._id}`,
      state: item
    });
  }

  return (
    <Container style={{paddingTop: 56}}>
      <PageHeader title="模板" backIcon={false} />
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
