import React, { useState, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './style.less';

export default (props) => {
  const { src, autoPlay } = props;
  const ref = useRef();
  const [paused, setPaused] = useState(true);

  const handleToggle = () => {
    if (ref.current.paused) {
      setPaused(false);
      ref.current.volume = 0;
      ref.current.play();
      anime({
        targets: ref.current,
        easing: 'linear',
        duration: 2000,
        volume: 1
      });
    } else {
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
  }
  
  return (
    <div className="audio-container" onClick={handleToggle}>
      <span className={`icon icon-music ${paused ? '' : 'spin'}`} />
      <audio
        ref={ref}
        src={src}
        autoPlay={autoPlay}
        loop
      />
    </div>
  )
}