import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './style.css';

export default (props) => {
  const {
    position = [0, 0, 100, 100],
    rotation,
    entrance,
    animation = {},
    children
  } = props;

  const ref = useRef();

  useEffect(() => {
    if (entrance) { // 入场
      anime({
        targets: ref.current,
        duration: animation.duration || 1000,
        delay: animation.delay || 0,
        easing: 'easeInOutSine',
        keyframes: [
          ...(animation.keyframes || []),
          {
            translateX: position[0],
            translateY: position[1],
            width: position[2],
            height: position[3],
            rotate: rotation,
          },
        ],
      });
    } else {
      anime({
        targets: ref.current,
        duration: 0,
        keyframes: animation.keyframes && [animation.keyframes[0]]
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrance]);
  
  return (
    <div ref={ref} className="element-container">
      {children}
    </div>
  )
}