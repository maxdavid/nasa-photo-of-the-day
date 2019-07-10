import React from 'react';

const DatePicker = props => {
  return (
    <div className='apod-picker'>
      <input
        type='date'
        name='apod_date'
        value={props.date}
        min='1995-06-30'
        max={props.today}
        onChange={e => props.changeDate(e.target.value)}
      />
      <div className='nextprev-buttons'>
        <button className='prev-button' onClick={() => props.prevDate()}>
          Previous Day
        </button>
        <button
          className='next-button'
          onClick={() => props.nextDate()}
          disabled={props.date === props.today ? true : false}
        >
          Next Day
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
