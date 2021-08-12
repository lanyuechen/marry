import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import Audio from '@/components/audio';
import Icon from '@/components/icon';
import ELEMENTS from '@/components/elements';
import prepare from '@/utils/prepare';

import style from './style.less';

export default (props) => {
  const { data: _data, editable, onEdit } = props;
  const [ currentIdx, setCurrentIdx ] = useState(0);

  const data = useMemo(() => prepare(_data), [_data]);

  return (
    <>
      {data.audio && <Audio {...data.audio} />}
      <Swiper
        style={{height: '100%'}}
        autoplay={data.transition.autoPlay && {
          delay: data.transition.duration || 3000
        }}
        direction={data.transition.direction}
        effect={data.transition.effect}
        onSlideChangeTransitionEnd={(swiper) => setCurrentIdx(swiper.activeIndex)}
      >
        {data.pages.map((page, pageIdx) => (
          <SwiperSlide key={page.id}>
            <PageContainer background={page.background}>
              {page.elements && page.elements.map((element, elementIdx) => {
                const C = ELEMENTS[element.type];
                return (
                  <ElementContainer
                    key={elementIdx}
                    entrance={currentIdx === pageIdx}
                    position={element.position}
                    size={element.size}
                    rotation={element.rotation}
                    clip={element.clip}
                    animation={!editable && element.animation}
                  >
                    <C {...element.props} size={element.size} />
                    {editable && onEdit && (
                      <button
                        className={style.btn}
                        onClick={() => onEdit(pageIdx, elementIdx)}
                      >
                        <Icon type="icon-edit" />
                      </button>
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