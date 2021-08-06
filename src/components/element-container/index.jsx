import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import { prepareKeyframes, prepareInitState } from '@/utils/prepare';
import ClipPath from '@/components/clip-path';

import style from './style.css';

export default (props) => {
  const {
    position,
    size,
    rotation,
    clip,
    entrance,
    animation = {},
    children
  } = props;

  const ref = useRef();
  const store = useRef();

  const [ firstKeyFrame, ...keyframes ] = prepareKeyframes(animation, { position, size, rotation });
  const initState = prepareInitState(firstKeyFrame);  // 元素初始状态

  useEffect(() => {
    if (!keyframes.length) {
      return;
    }
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
        store.current.reverse();
        store.current.play();
      }
    } else {
      if (store.current) {
        store.current.reverse();
        store.current.play();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrance]);

  return (
    <div
      ref={ref}
      className={style.container}
      style={{
        ...initState,
        clipPath: clip && `url(#${clip.id})`,
      }}
    >
      {children}
      {clip && <ClipPath {...clip} size={size} />}
    </div>
  )
}