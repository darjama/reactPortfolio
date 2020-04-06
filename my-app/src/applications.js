import React from 'react';
import './applications.css';

const Applications = () => {
    return (
      <div className="applications">
        <p>
        Here is a collection of software applications I've worked on:
        </p>
        <div className='appBody' background='./dmLogo.gif'>appBody</div>
        <div className='appTitle'>SofaMart</div>
        <div className='appBody' background='./dmLogo.gif'>appBody</div>
        <div className='appTitle'>Craftworkery</div>
        <div className='appBody' background='./dmLogo.gif'>appBody</div>
        <div className='appTitle'>My New Fave</div>
        <div className='appBody' background='./dmLogo.gif'>appBody</div>
        <div className='appTitle'>ConnectSquares</div>
      </div>
    )
}

export default Applications;