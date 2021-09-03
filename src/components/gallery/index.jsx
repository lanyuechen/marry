import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import ELEMENTS from '@/components/elements';
import { preparePages } from '@/utils/prepare';

export default (props) => {
  const spaceBetween = 0;
  const [pages, pageSize] = useMemo(() => {
    const pageSize = { width: (window.innerWidth - spaceBetween) / 3, height: 200 }
    return [
      preparePages(props.pages, pageSize),
      pageSize
    ];
  }, [props.pages]);

  return (
    <Swiper
      style={{height: 200}}
      slidesPerView={3}
      spaceBetween={spaceBetween}
      effect="coverflow"
      // freeMode
      centeredSlides
      pagination={{
        clickable: true
      }}
    >
      {pages.map((page) => (
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
  );
}