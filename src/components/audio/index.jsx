import React from 'react';

export default (props) => {
  const { src } = props;

  return null;
  
  return (
    <div>
      <audio src={src} controls />
    </div>
  )
}