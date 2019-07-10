import React from 'react';

const Image = props => {
  return (
    <div className='apod-image'>
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

export default Image;
