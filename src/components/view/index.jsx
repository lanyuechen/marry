import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PageContainer from '@/components/page-container';
import Animation from '@/components/animation';
import Audio from '@/components/audio';
import Icon from '@/components/icon';
import Element from '@/components/element';
import prepare from '@/utils/prepare';
import * as animation from '@/utils/animation';

import style from './style.less';

export default (props) => {
  const { data: _data, editable, onEdit } = props;
  const [ currentIdx, setCurrentIdx ] = useState(0);

  const pageSize = { width: window.innerWidth, height: window.innerHeight };
  
  const data = useMemo(() => prepare(_data, pageSize), [_data]);

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
                return (
                  <Animation
                    key={elementIdx}
                    entrance={currentIdx === pageIdx}
                    {...element.animation}
                    keyframes={animation.keyframes('slide-in-left', {
                      x: element.position[0],
                      y: element.position[1],
                      width: element.size[0],
                      height: element.size[1],
                      rotation: element.rotation,
                    }, pageSize)}
                  >
                    <Element
                      type={element.type}
                      size={element.size}
                      clip={element.clip}
                      frame={element.frame}
                      elementProps={element.props}
                    />
                    {editable && onEdit && (
                      <button
                        className={style.btn}
                        onClick={() => onEdit(pageIdx, elementIdx)}
                      >
                        <Icon type="icon-edit" />
                      </button>
                    )}
                  </Animation>
                );
              })}
            </PageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
