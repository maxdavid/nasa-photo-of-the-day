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
      moment(date, 'YYYY-MM-DD')
        .add(1, 'days')
        .format('YYYY-MM-DD')
    );
  const prevDate = () =>
    setDate(
      moment(date, 'YYYY-MM-DD')
        .subtract(1, 'days')
        .format('YYYY-MM-DD')
    );

  if (!apod) return <h3>Loading...</h3>;
  else {
    return (
      <div className='App'>
        {apod.media_type === 'image' ? (
          <div>
            <Image url={apod.hdurl} alt={apod.title} />
          </div>
        ) : (
          <Video url={apod.url} title={apod.title} />
        )}
        <Description
          title={apod.title}
          date={apod.date}
          explanation={apod.explanation}
        />
        <DatePicker
          today={today}
          date={apod.date}
          changeDate={setDate}
          prevDate={prevDate}
          nextDate={nextDate}
        />
      </div>
    );
  }
}

export default App;
