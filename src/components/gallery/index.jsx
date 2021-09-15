import React, { useMemo, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageContainer from '@/components/page-container';
import Animation from '@/components/animation';
import Frame from '@/components/frame';
import ClipPath from '@/components/clip-path';
import ELEMENTS from '@/components/elements';
import { preparePages } from '@/utils/prepare';
import * as animation from '@/utils/animation';

import style from './style.less';

export default (props) => {
  const { pages, activeIndex, onSlideChange } = props;
  const ref = useRef();
  const spaceBetween = 16;
  const pageSize = { width: (window.innerWidth - spaceBetween) / 3, height: 200 }

  const data = useMemo(() => preparePages(pages, pageSize), [pages]);

  useEffect(() => {
    if (ref.current && typeof activeIndex === 'number' && ref.current.activeIndex !== activeIndex) {
      ref.current.slideTo(activeIndex, 300, false);
    }
  }, [activeIndex]);

  const handleSlideChange = (idx) => {
    onSlideChange && onSlideChange(idx, 0);
  }

  return (
    <div className={style.gallery}>
      <Swiper
        style={{height: 200}}
        slidesPerView={3}
        spaceBetween={spaceBetween}
        // effect="coverflow"
        centeredSlides
        onSwiper={(swiper => ref.current = swiper)}
        onSlideChangeTransitionEnd={(swiper) => handleSlideChange(swiper.activeIndex)}
        pagination={{
          clickable: true
        }}
      >
        {data.map((page, pageIdx) => (
          <SwiperSlide key={pageIdx}>
            <PageContainer background={page.background}>
              {page.elements && page.elements.map((element, elementIdx) => {
                const C = ELEMENTS[element.type];
                let elementJsx = <C {...element.props} size={element.size} />;
                if (element.frame) {
                  elementJsx = <Frame {...element.frame}>{elementJsx}</Frame>;
                } else if (element.clip) {
                  elementJsx = <ClipPath {...element.clip} size={element.size}>{elementJsx}</ClipPath>;
                }
                return (
                  <Animation
                    key={elementIdx}
                    entrance={true}
                    {...element.animation}
                    keyframes={animation.keyframes('slide-in-left', {
                      x: element.position[0],
                      y: element.position[1],
                      width: element.size[0],
                      height: element.size[1],
                      rotation: element.rotation,
                    }, pageSize)}
                  >
                    {elementJsx}
                  </Animation>
                );
              })}
            </PageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}