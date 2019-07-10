import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

import { Image, Description, Video, DatePicker } from './components';
const moment = require('moment');

function App() {
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  useEffect(() => fetchApod(), [date]);

  const fetchApod = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`, {
        params: { date: date, api_key: 'DEMO_KEY' }
      })
      .then(res => {
        setApod(res.data);
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const changeDate = date => {
    setDate(date);
  };

  return (
    <div className='App'>
      {apod.media_type === 'image' ? (
        <Image url={apod.hdurl} alt={apod.title} />
      ) : (
        <Video url={apod.url} />
      )}
      <Description
        title={apod.title}
        date={apod.date}
        explanation={apod.explanation}
      />
      <DatePicker date={apod.date} changeDate={changeDate} />
    </div>
  );
}

export default App;
