import React from 'react';
import { Image } from 'antd';
import AspectCard from '@/components/aspect-card';
import style from './style.less';

export default (props) => {
  const { cover, width, onClick } = props;
  return (
    <AspectCard aspect={1.414} width={width}>
      <div className={style.book} onClick={onClick}>
        <div className={style.paper} />
        <img src={cover} className={style.corner} />
        <Image
          width="100%"
          height="100%"
          src={cover}
          className={style.cover}
          preview={false}
        />
      </div>
    </AspectCard>
  )
}