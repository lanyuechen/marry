import React from 'react';

import './style.css';

export default (props) => {
  const { src } = props;

  return (
    <img className="element-image" src={src} alt="img" />
  );
}