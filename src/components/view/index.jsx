import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import Audio from '@/components/audio';
import elements from '@/components/elements';
import prepare from '@/utils/prepare';

SwiperCore.use([Autoplay]);

import style from './style.less';

export default (props) => {
  const { data: _data, editable, onEdit } = props;
  const [ currentIdx, setCurrentIdx ] = useState(0);

  const data = useMemo(() => prepare(_data), [_data]);

  return (
    <>
      <Audio {...data.audio} />
      <Swiper
        autoplay={data.transition.autoPlay}
        direction={data.transition.direction}
        effect={data.transition.effect}
        onSlideChangeTransitionEnd={(swiper) => setCurrentIdx(swiper.activeIndex)}
      >
        {data.pages.map((page, pageIdx) => (
          <SwiperSlide key={page.id}>
            <PageContainer background={page.background}>
              {page.elements && page.elements.map((element, elementIdx) => {
                const C = elements[element.type];
                return (
                  <ElementContainer
                    key={elementIdx} 
                    entrance={currentIdx === pageIdx}
                    position={element.position}
                    size={element.size}
                    rotation={element.rotation}
                    clip={element.clip}
                    animation={element.animation}
                  >
                    <C {...element.props} size={element.size} />
                    {editable && onEdit && (
                      <button
                        className={`${style.btn} icon icon-edit`}
                        onClick={() => onEdit(pageIdx, elementIdx)}
                      />
                    )}
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
