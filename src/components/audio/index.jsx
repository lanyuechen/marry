import React, { useState, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Icon from '@/components/icon';

import style from './style.less';

export default (props) => {
  const { src, autoPlay } = props;
  console.log('todo autoPlay', autoPlay);
  const ref = useRef();
  const [paused, setPaused] = useState(true);

  const handleToggle = () => {
    if (ref.current.paused) {
      play();
    } else {
      pause();
    } 
  }

  const play = () => {
    setPaused(false);
    ref.current.volume = 0;
    ref.current.play();
    anime({
      targets: ref.current,
      easing: 'linear',
      duration: 2000,
      volume: 1,
    });
  }

  const pause = () => {
    setPaused(true);
    ref.current.volume = 1;
    anime({
      targets: ref.current,
      easing: 'linear',
      duration: 2000,
      volume: 0,
      complete: () => {
        ref.current.pause();
      }
    });
  }
  
  return (
    <div className={style.container} onClick={handleToggle}>
      <Icon type="icon-music" className={`${paused ? '' : 'spin'}`} />
      <audio
        ref={ref}
        src={src}
        loop
      />
    </div>
  )
}