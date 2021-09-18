import React, { Children, isValidElement, cloneElement } from 'react';

import Option from './option';

import style from './style.less';

const GridSelect = (props) => {
  const { children, value, onChange, ...otherProps } = props;

  return (
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
          onClick: () => onChange(child.key),
          active: value === child.key
        });
      })}
    </div>
  )
}

GridSelect.Option = Option;

export default GridSelect;