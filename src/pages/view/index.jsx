import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import elements from '@/components/elements';

import data from './data.json';

// direction:   'horizontal' | 'vertical'
// effect:      'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
export default () => {
  const dataSource = data.map((d, i) => ({
    ...d,
    id: i
  }));

  return (
    <Swiper
      direction="vertical"
      effect="slide"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dataSource.map(page => (
        <SwiperSlide key={page.id}>
          <PageContainer background={page.background}>
            {page.components && page.components.map((d, i) => {
              const C = elements[d.type];
              return (
                <ElementContainer
                  key={i} 
                  position={d.position}
                  rotation={d.rotation}
                >
                  <C src={d.src} />
                </ElementContainer>
              );
            })}
          </PageContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
