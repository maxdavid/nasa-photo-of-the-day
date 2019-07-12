import React from 'react';

const Image = props => {
  return (
    <div className='w-full h-auto object-contain'>
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

export default Image;
