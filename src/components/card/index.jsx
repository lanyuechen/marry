import React from 'react';

import style from './style.less';

const LINE = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1490"><rect fill-opacity="0"/></svg>'

export default (props) => {
  const { cover } = props;
  return (
    <div className={style.container}>
      <div className={style.bookCover}>
        <div className={style.paper}></div>
        <div className={style.book}>
          <div className={style.cover}>
            <img src={LINE} style={{backgroundImage: `url(${cover})`}} />
            <div className={style.paper}></div>
          </div>
          <img src={LINE} className={style.corner} style={{backgroundImage: `url(${cover})`}} />
        </div>
      </div>
      <svg width="0" height="0">
        <filter id="book-cover-paper-1">
          <feturbulence type="fractalNoise" baseFrequency=".95 .95" numOctaves="80" result="noise"></feturbulence>
          <fediffuselighting in="noise" lightingColor="#004F85" surfaceScale=".8" result="grind">
            <fedistantlight azimuth="500" elevation="50"></fedistantlight>
          </fediffuselighting>
          <fegaussianblur in="grind" stdDeviation=".5"></fegaussianblur>
        </filter>
      </svg>
    </div>
  )
}