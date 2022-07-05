import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1508030358362-c071fa056233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1525095240410-9645dea911e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1></h1>
          <h2>204 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1618503551238-7df2c50d2236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Reno</h1>
          <h2>546 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
