import React from 'react';

import './style.css';

export default (props) => {
  const { background, children } = props;
  return (
    <div
      className="page-container"
      style={{ background }}
    >
      {children}
    </div>
  );
}