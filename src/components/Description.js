import React from 'react';

const Description = props => {
  return (
    <div className='apod-description'>
      <h2>{props.title}</h2>
      <h4>{props.date}</h4>
      <p>{props.explanation}</p>
    </div>
  );
};

export default Description;
