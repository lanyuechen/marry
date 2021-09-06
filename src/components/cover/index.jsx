import React from 'react';
import { Image } from 'antd';
import AspectCard from '@/components/aspect-card';
import style from './style.less';

const LINE = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1490"><rect fill-opacity="0"/></svg>'

export default (props) => {
  const { cover, width, onClick } = props;
  return (
    <AspectCard aspect={1.414} width={width}>
      <div className={style.book} onClick={onClick}>
        <div className={style.paper} />
        <img src={LINE} style={{backgroundImage: `url(${cover})`}} />
        <img src={LINE} className={style.corner} style={{backgroundImage: `url(${cover})`}} />
      </div>
    </AspectCard>
  )
}