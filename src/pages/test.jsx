import React, { useRef } from 'react';
import Animation from '@/components/animation';
import Frame from '@/components/frame';

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
      <div style={{width: 200, height: 300, position: 'absolute', left: 100, top: 100}}>
        <Frame>
          xxx
        </Frame>
      </div>
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
