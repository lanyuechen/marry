import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import Audio from '@/components/audio';
import elements from '@/components/elements';

import data from './data.json';

// direction:   'horizontal' | 'vertical'
// effect:      'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
export default () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const dataSource = data.pages.map((d, i) => ({
    ...d,
    id: i
  }));

  return (
    <>
      <Audio {...data.audio} />
      <Swiper
        direction="vertical"
        effect="slide"
        onSlideChange={(swiper) => setCurrentIdx(swiper.activeIndex)}
      >
        {dataSource.map((page, pageIdx) => (
          <SwiperSlide key={page.id}>
            <PageContainer background={page.background}>
              {page.components && page.components.map((element, elementIdx) => {
                const C = elements[element.type];
                return (
                  <ElementContainer
                    key={elementIdx} 
                    position={element.position}
                    rotation={element.rotation}
                  >
                    <C {...element.props} />
                  </ElementContainer>
                );
              })}
            </PageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
