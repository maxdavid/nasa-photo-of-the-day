import React from 'react';
const moment = require('moment');

const Description = props => {
  return (
    <div className='max-w-3xl mx-auto my-5'>
      <h2 className='text-2xl font-bold'>{props.title}</h2>
      <h4 className='text-gray-500'>
        {moment(props.date).format('MMMM Do YYYY')}
      </h4>
      <p className='my-3 text-left'>{props.explanation}</p>
    </div>
  );
};

export default Description;
