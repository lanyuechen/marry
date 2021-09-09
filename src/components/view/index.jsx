import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PageContainer from '@/components/page-container';
import Animation from '@/components/animation';
import ClipPath from '@/components/clip-path';
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
                  <Animation
                    key={elementIdx}
                    entrance={currentIdx === pageIdx}
                    {...element.animation}
                    keyframes={[
                      {
                        width: element.size[0],
                        height: element.size[1],
                        translateX: -element.size[0],
                        translateY: element.position[1],
                        duration: 0,
                        opacity: 1
                      },
                      {
                        translateX: element.position[0],
                      },
                    ]}
                  >
                    {element.clip && (
                      <ClipPath {...element.clip} size={element.size}>
                        <C {...element.props} size={element.size} />
                      </ClipPath>
                    )}
                    {!element.clip && (
                      <C {...element.props} size={element.size} />
                    )}
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
