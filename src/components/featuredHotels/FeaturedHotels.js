import React from 'react';
import './featuredHotels.css';

const FeaturedHotels = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://images.unsplash.com/photo-1605908446746-e67020f19097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://images.unsplash.com/photo-1562595410-2cb999af24b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://images.unsplash.com/photo-1582076197789-5c2af0bb51fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
