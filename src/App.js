import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

import { Image, Description } from './components';

function App() {
  const [apod, setApod] = useState({});

  const fetchApod = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-07-22`
      )
      .then(res => setApod(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => fetchApod(), []);

  return (
    <div className='App'>
      <Image url={apod.hdurl} alt={apod.title} />
      <Description
        title={apod.title}
        date={apod.date}
        explanation={apod.explanation}
      />
    </div>
  );
}

export default App;
