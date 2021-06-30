import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import { getKeyframes, getInitState } from '@/utils/utils';

import './style.css';

export default (props) => {
  const {
    position = [0, 0],
    size = [100, 100],
    entrance,
    animation = {},
    children
  } = props;

  const ref = useRef();
  const store = useRef();

  const [ firstKeyFrame, ...keyframes ] = getKeyframes(animation, { position, size });
  const initState = getInitState(firstKeyFrame);  // 元素初始状态

  useEffect(() => {
    if (entrance) { // 入场
      if (!store.current) {
        store.current = anime({
          targets: ref.current,
          duration: animation.duration || 1000,
          delay: animation.delay || 0,
          easing: 'easeInOutSine',
          keyframes,
        });
      } else {
        store.current.restart();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrance]);

  return (
    <div
      ref={ref}
      className="element-container"
      style={initState}
    >
      {children}
    </div>
  )
}