import React, { useMemo, useEffect, useRef } from 'react';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './style.less';

export default (props) => {
  const { pages, activeIndex, onSlideChange } = props;
  const ref = useRef();

  const data = useMemo(() => {
    const res = [];
    for (let i = 0; i < pages.length; i++) {
      for (let element of (pages[i].elements || [])) {
        if (element.type === 'image') {
          res.push({
            src: element.props.src,
            pageIdx: i,
          });
        }
      }
    }
    return res;
  }, [pages]);

  useEffect(() => {
    if (ref.current && ref.current.activeIndex !== activeIndex) {
      ref.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const handleSlideChange = (idx) => {
    const current = data[idx];
    onSlideChange && onSlideChange(current.pageIdx, idx);
  }

  return (
    <div className={style.resource}>
      <Swiper
        style={{height: 200}}
        centeredSlides
        onSwiper={(swiper => ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        pagination={{
          clickable: true
        }}
      >
        {data.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image className={style.image} src={image.src} width="100%" height="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}