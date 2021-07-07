import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import update from 'immutability-helper';

import ELEMENTS from '@/components/elements';
import PageContainer from '@/components/page-container';
import ElementContainer from '@/components/element-container';
import Audio from '@/components/audio';
import prepare from '@/utils/prepare';

import * as service from '@/services';

import PropDrawer from './prop-drawer';
import EditorBtn from './editor-btn';

export default (props) => {
  const { id } = props.match.params;
  const [ currentIdx, setCurrentIdx ] = useState(0);
  const [ currentElementIdx, setCurrentElementIdx ] = useState(-1);
  const [ data, setData ] = useState();

  useEffect(() => {
    service.getTemplate(id).then(res => {
      setData(prepare(res));
    });
  }, [id]);

  if (!data) {
    return null;
  }

  const showPropDrawer = (idx) => {
    setCurrentElementIdx(idx);
  }

  const hidePropDrawer = () => {
    setCurrentElementIdx(-1);
  }

  const handleChange = (key, spec) => {
    key = typeof key === 'string' ? key.split('.') : [...key];
    spec = key.reverse().reduce((p, n) => ({[n]: p}), spec);
    setData(data => update(data, spec));
  }

  return (
    <>
      <PropDrawer
        data={data}
        pageIdx={currentIdx}
        elementIdx={currentElementIdx}
        onChange={handleChange}
        onClose={hidePropDrawer}
      />
      <Audio {...data.audio} />
      <Swiper
        direction={data.transition.direction}
        effect={data.transition.effect}
        // onSlideChange={(swiper) => setCurrentIdx(swiper.activeIndex)}
        onSlideChangeTransitionEnd={(swiper) => setCurrentIdx(swiper.activeIndex)}
      >
        {data.pages.map((page, pageIdx) => (
          <SwiperSlide key={page.id}>
            <PageContainer background={page.background}>
              {page.elements && page.elements.map((element, elementIdx) => {
                const C = ELEMENTS[element.type];
                return (
                  <ElementContainer
                    key={elementIdx} 
                    entrance={currentIdx === pageIdx}
                    position={element.position}
                    size={element.size}
                    rotation={element.rotation}
                    clip={element.clip}
                    animation={element.animation}
                  >
                    <C {...element.props} />
                    <EditorBtn onClick={() => showPropDrawer(elementIdx)} />
                  </ElementContainer>
                );
              })}
            </PageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
