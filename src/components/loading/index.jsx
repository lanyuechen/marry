import React from 'react';

import style from './style.less';

export default () => {
  return (
    <div className={style.loading}>
      <lottie-player
        src="./loading.json"
        background="transparent"
        speed="1"
        style={{width: 100, height: 100}}
        loop
        autoplay
      />
    </div>
  );
};