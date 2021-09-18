import React, { useMemo, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageContainer from '@/components/page-container';
import Animation from '@/components/animation';
import Element from '@/elements';
import { preparePages } from '@/utils/prepare';
import * as animation from '@/utils/animation';

import style from './style.less';

export default (props) => {
  const { pages, activeIndex, onSlideChange } = props;
  const ref = useRef();
  const spaceBetween = 16;
  const pageSize = { width: window.innerWidth, height: window.innerHeight };
  const scale = (window.innerWidth - spaceBetween * 2) / 3 / window.innerWidth;

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
        style={{ height: pageSize.height * scale }}
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
            <PageContainer
              background={page.background}
              style={{
                width: window.innerWidth,
                height: window.innerHeight,
                transformOrigin: '0 0',
                transform: `scale(${scale})`,
              }}
            >
              {page.elements && page.elements.map((element, elementIdx) => {
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
                    <Element
                      type={element.type}
                      size={element.size}
                      clip={element.clip}
                      frame={element.frame}
                      elementProps={element.props}
                    />
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