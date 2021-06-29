import React from 'react';

export default (props) => {
  const { src } = props;

  return (
    <div>
      <img src={src} alt="img" />
    </div>
  );
}