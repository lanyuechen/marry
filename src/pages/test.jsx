import React, { useState } from 'react';

export default () => {
  const [idx, setIdx] = useState(0);

  const play = () => {
    console.log('+++', idx);
    setIdx(i => i + 1);
  }

  return (
    <div>
      <button onClick={play}>play</button>
    </div>
  );
}
