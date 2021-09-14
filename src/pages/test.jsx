import React, { useRef, useState } from 'react';

function C(props) {
  const { idx } = props;
  console.log('C', idx);

  const show = () => {
    console.log('===', idx);
  }

  return (
    <div>
      {/* {idx} */}
      <button onClick={show}>show</button>
    </div>
  )
}

export default function() {
  const [idx, setIdx] = useState(0);

  const play = () => {
    console.log('+++', idx);
    setIdx(i => i + 1);
  }

  let X = C;

  return (
    <div>
      <button onClick={play}>play</button>
      <X idx={idx} />
    </div>
  );
}
