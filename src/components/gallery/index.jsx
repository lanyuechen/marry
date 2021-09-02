import React from 'react';
import ElementContainer from '@/components/element-container';
import ELEMENTS from '@/components/elements';

import style from './style.less';

export default (props) => {
  const { pages = [] } = props;

  return (
    <div className={style.gallery}>
      {pages.map((page, pageIdx) => (
        <div key={page.id} className={style.galleryPage}>
          {page.elements && page.elements.map((element, elementIdx) => {
            const C = ELEMENTS[element.type];
            return (
              <ElementContainer
                key={elementIdx}
                position={element.position}
                size={element.size}
                rotation={element.rotation}
                clip={element.clip}
                animation={false}
              >
                <C {...element.props} size={element.size} />
              </ElementContainer>
            );
          })}
        </div>
      ))}
    </div>
  );
}