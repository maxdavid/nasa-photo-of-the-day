import React from 'react';

const Video = props => {
  return (
    <div className='w-full h-auto'>
      <iframe
        src={props.url}
        title={props.title}
        type='text/html'
        width='800'
        height='480'
        frameBorder='0'
        className='mx-auto'
      />
    </div>
  );
};

export default Video;
