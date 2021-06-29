import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './style.css';

export default (props) => {
  const { position = [0, 0, 100, 100], rotation, children } = props;
  const ref = useRef();

  useEffect(() => {
    anime({
      targets: ref.current,
      duration: 1000,
      delay: 0,
      translateX: position[0],
      translateY: position[1],
      width: position[2],
      height: position[3],
      rotate: rotation,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div ref={ref} className="element-container">
      {children}
    </div>
  )
}