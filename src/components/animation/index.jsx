import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

import style from './style.css';

export default forwardRef((props, ref) => {
  const { children, enable, entrance, ...animeProps } = props;

  useImperativeHandle(ref, () => ({
    play: () => {
      animeInstance.current.play();
    }
  }));

  const target = useRef();
  const animeInstance = useRef();

  useEffect(() => {
    animeInstance.current = anime({
      targets: target.current,
      autoplay: false,
      easing: 'easeInOutSine',
      ...animeProps,
    });
  }, []);

  useEffect(() => {
    if (entrance) {
      animeInstance.current.play();
    } else {
      animeInstance.current.seek(0);
    }
  }, [entrance]);

  return (
    <div
      ref={target}
      className={style.container}
    >
      {children}
    </div>
  )
})