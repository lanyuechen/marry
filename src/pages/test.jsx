import React, { useRef } from 'react';
import Animation from '@/components/animation';

export default function() {
  const position = [200, 100];
  const size = [100, 100];

  const ref = useRef();
  
  const play = () => {
    ref.current.play();
  }

  return (
    <div>
      <button onClick={play}>play</button>
      <Animation
        ref={ref}
        easing={'easeInOutSine'}
        keyframes={[
          { translateX: -size[0], translateY: position[1], duration: 0, opacity: 1 },
          { translateX: position[0], translateY: position[1] },
        ]}
      >
        <div
          style={{
            width: size[0],
            height: size[1],
            background: '#eee'
          }}>
          box
        </div>
      </Animation>
    </div>
  );
}
