import React, { useMemo, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './style.less';

export default (props) => {
  const { pages, activeIndex, onSlideChange } = props;
  const ref = useRef();

  const data = useMemo(() => {
    const res = [];
    for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
      const elements = pages[pageIdx].elements || [];
      for (let elementIdx = 0; elementIdx < elements.length; elementIdx++) {
        const element = elements[elementIdx];
        res.push({
          type: element.type,
          src: element.props.src,
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
        style={{height: 200}}
        centeredSlides
        onSwiper={(swiper => ref.current = swiper)}
        onSlideChangeTransitionEnd={(swiper) => handleSlideChange(swiper.activeIndex)}
        pagination={{
          clickable: true
        }}
      >
        {data.map((element, idx) => (
          <SwiperSlide key={idx}>
            {element.type === 'image' && <img className={style.image} src={element.src} />}
            {element.type !== 'image' && element.type}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}