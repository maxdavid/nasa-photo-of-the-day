import React from 'react';

const DatePicker = props => {
  return (
    <div className='flex justify-between items-center w-full h-12 mx-auto my-2'>
      <input
        type='date'
        name='apod_date'
        value={props.date}
        min='1995-06-30'
        max={props.today}
        onChange={e => props.changeDate(e.target.value)}
        className='h-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none'
      />
      <div className='flex h-full justify-center'>
        <button
          className='h-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none'
          onClick={() => props.prevDate()}
        >
          Previous Day
        </button>
        <button
          className={`h-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none${
            +(props.date === props.today)
              ? ' opacity-50 cursor-not-allowed'
              : ' hover:bg-gray-400'
          }`}
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
