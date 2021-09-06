import React from 'react';
import Container from '@/components/container';
import Loading from '@/components/loading';
import PageHeader from '@/components/page-header';

export default function() {
  return (
    <Container style={{paddingTop: 56}}>
      <PageHeader title="首页" showBack={false} />
      <Loading />
    </Container>
  );
}
