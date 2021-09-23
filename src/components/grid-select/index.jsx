import React, { Children, isValidElement, cloneElement } from 'react';

import Option from './option';

import style from './style.less';

const GridSelect = (props) => {
  const { children, value, column = 1, onChange, ...otherProps } = props;

  return (
    <div className={style.gridSelectContainer}>
      <div
        className={style.gridSelect}
        {...otherProps}
      >
        {Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return null
          }
          return cloneElement(child, {
            ...child.props,
            active: value === child.key,
            style: {
              ...(child.props.style || {}),
              width: `${1 / column * 100}%`
            },
            onClick: () => onChange?.(child.key),
          });
        })}
      </div>
    </div>
  )
}

GridSelect.Option = Option;

export default GridSelect;