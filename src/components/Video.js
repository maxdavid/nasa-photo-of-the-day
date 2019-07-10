import React from 'react';

const Video = props => {
  return (
    <div className='apod-video'>
      <iframe
        src={props.url}
        type='text/html'
        width='800'
        height='480'
        frameborder='0'
      />
    </div>
  );
};

export default Video;
