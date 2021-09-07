import React, { useMemo, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import ELEMENTS from '@/components/elements';
import { preparePages } from '@/utils/prepare';

import style from './style.less';

export default (props) => {
  const { pages, activeIndex, onSlideChange } = props;
  const ref = useRef();
  const spaceBetween = 0;
  const [data, pageSize] = useMemo(() => {
    const pageSize = { width: (window.innerWidth - spaceBetween) / 3, height: 200 }
    let lastPage;
    return [
      preparePages(pages, pageSize).map((page, i) => {
        let elementIdx = 0;
        if (lastPage) {
          elementIdx = lastPage.elementIdx + lastPage.elements.filter(element => element.type === 'image').length;
        }
        lastPage = {
          ...page,
          elementIdx,
        };
        return lastPage;
      }),
      pageSize,
    ];
  }, [pages]);

  useEffect(() => {
    if (ref.current && ref.current.activeIndex !== activeIndex) {
      ref.current.slideTo(activeIndex, 300, false);
    }
  }, [activeIndex]);

  const handleSlideChange = (idx) => {
    const current = data[idx];
    onSlideChange && onSlideChange(idx, current.elementIdx);
  }

  return (
    <div className={style.gallery}>
      <Swiper
        style={{height: 200}}
        slidesPerView={3}
        spaceBetween={spaceBetween}
        effect="coverflow"
        centeredSlides
        onSwiper={(swiper => ref.current = swiper)}
        onSlideChangeTransitionStart={(swiper) => handleSlideChange(swiper.activeIndex)}
        pagination={{
          clickable: true
        }}
      >
        {data.map((page) => (
          <SwiperSlide key={page.id}>
            <PageContainer background={page.background}>
              {page.elements && page.elements.map((element, elementIdx) => {
                const C = ELEMENTS[element.type];
                return (
                  <ElementContainer
                    key={elementIdx}
                    position={element.position}
                    pageSize={pageSize}
                    size={element.size}
                    rotation={element.rotation}
                    clip={element.clip}
                    animation={false}
                  >
                    <C {...element.props} size={element.size} />
                  </ElementContainer>
                );
              })}
            </PageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}