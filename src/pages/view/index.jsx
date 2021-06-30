import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import Audio from '@/components/audio';
import elements from '@/components/elements';

import * as service from '@/services';

export default (props) => {
  const { id } = props.match.params;
  const [ currentIdx, setCurrentIdx ] = useState(0);
  const [ pending, setPending ] = useState(false);
  const [ data, setData ] = useState();

  useEffect(() => {
    setPending(true);
    service.getTemplate(id).then(res => {
      setPending(false);
      setData({
        ...res,
        pages: res.pages.map((d, i) => ({
          ...d,
          id: i
        })),
      });
    });
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <>
      <Audio {...data.audio} />
      <Swiper
        direction="vertical"
        effect="slide"
        onSlideChange={(swiper) => setCurrentIdx(swiper.activeIndex)}
      >
        {data.pages.map((page, pageIdx) => (
          <SwiperSlide key={page.id}>
            <PageContainer background={page.background}>
              {page.components && page.components.map((element, elementIdx) => {
                const C = elements[element.type];
                return (
                  <ElementContainer
                    key={elementIdx} 
                    position={element.position}
                    rotation={element.rotation}
                    entrance={currentIdx === pageIdx}
                    animation={element.animation}
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
