import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Image, Description, Video, DatePicker } from './components';
const moment = require('moment');

function App() {
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const today = useState(date)[0];
  useEffect(() => fetchApod(), [date]);
  const fetchApod = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`, {
        params: {
          date: date,
          api_key: 'DEMO_KEY'
        }
      })
      .then(res => {
        console.log(res);
        setApod(res.data);
      })
      .catch(err => console.log(err));
  };

  const nextDate = () =>
    setDate(
      moment(date)
        .add(1, 'days')
        .format('YYYY-MM-DD')
    );
  const prevDate = () =>
    setDate(
      moment(date)
        .subtract(1, 'days')
        .format('YYYY-MM-DD')
    );

  if (!apod) return <h3>Loading...</h3>;
  else {
    return (
      <div className='max-w-5xl mx-auto mt-3 mb-10 text-center'>
        <h1 className='text-3xl font-bold mx-auto'>
          NASA Astronomy Picture of the Day
        </h1>
        <DatePicker
          today={today}
          date={apod.date}
          changeDate={setDate}
          prevDate={prevDate}
          nextDate={nextDate}
        />
        {apod.media_type === 'image' ? (
          <Image url={apod.hdurl} alt={apod.title} />
        ) : (
          <Video url={apod.url} title={apod.title} />
        )}
        <Description
          title={apod.title}
          date={apod.date}
          explanation={apod.explanation}
        />
        <div className='mx-auto text-gray-400 text-sm'>
          A service of{' '}
          <a className='underline hover:text-gray-500' href='http://nasa.gov'>
            NASA
          </a>
        </div>
      </div>
    );
  }
}

export default App;
