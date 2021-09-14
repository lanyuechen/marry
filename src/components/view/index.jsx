import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PageContainer from '@/components/page-container';
import Animation from '@/components/animation';
import ClipPath from '@/components/clip-path';
import Frame from '@/components/frame';
import Audio from '@/components/audio';
import Icon from '@/components/icon';
import ELEMENTS from '@/components/elements';
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
                const C = ELEMENTS[element.type];
                let elementJsx = <C {...element.props} size={element.size} />;
                if (element.frame) {
                  elementJsx = <Frame {...element.frame}>{elementJsx}</Frame>;
                }
                if (element.clip) {
                  elementJsx = <ClipPath {...element.clip} size={element.size}>{elementJsx}</ClipPath>;
                }
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
                    }, pageSize)}
                  >
                    {elementJsx}
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
