import React from 'react';

const DatePicker = props => {
  return (
    <div className='apod-picker'>
      <input
        type='date'
        name='apod_date'
        value={props.date}
        min='1995-06-30'
        onChange={e => props.changeDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
