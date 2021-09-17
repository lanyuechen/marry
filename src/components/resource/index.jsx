import React, { useMemo, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Element from '@/components/element';
import { prepareElements } from '@/utils/prepare';

import style from './style.less';

export default (props) => {
  const { pages, activeIndex, onSlideChange } = props;
  const cSize = { width: window.innerWidth, height: 200 };
  const ref = useRef();

  const data = useMemo(() => {
    const res = [];
    for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
      const elements = prepareElements(pages[pageIdx].elements, { width: window.innerWidth, height: window.innerHeight }); // 按照屏幕尺寸初始化是为了获取元素的真实尺寸，视觉上保持一致
      for (let elementIdx = 0; elementIdx < elements.length; elementIdx++) {
        const element = elements[elementIdx];
        res.push({
          ...element,
          pageIdx,
          elementIdx,
        });
      }
    }
    return res;
  }, [pages]);

  useEffect(() => {
    if (ref.current && ref.current.activeIndex !== activeIndex) {
      ref.current.slideTo(activeIndex, 300, false);
    }
  }, [activeIndex]);

  const handleSlideChange = (idx) => {
    const current = data[idx];
    onSlideChange && onSlideChange(current.pageIdx, current.elementIdx);
  }

  return (
    <div className={style.resource}>
      <Swiper
        style={{height: cSize.height}}
        centeredSlides
        onSwiper={(swiper => ref.current = swiper)}
        onSlideChangeTransitionEnd={(swiper) => handleSlideChange(swiper.activeIndex)}
        pagination={{
          clickable: true
        }}
      >
        {data.map((element, idx) => {
          const size = [];
          const s = element.size[1] / element.size[0];
          if (cSize.height / cSize.width < s) {
            size[1] = cSize.height;
            size[0] = cSize.height / s;
          } else {
            size[0] = cSize.width;
            size[1] = cSize.width * s;
          }

          return (
            <SwiperSlide key={idx}>
              <div
                style={{
                  position: 'relative',
                  width: size[0],
                  height: size[1],
                  transform: `translate(${(cSize.width - size[0]) / 2}px, ${(cSize.height - size[1]) / 2}px)`
                }}
              >
                <Element
                  type={element.type}
                  size={size}
                  clip={element.clip}
                  frame={element.frame}
                  elementProps={element.props}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}