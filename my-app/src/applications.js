import React from 'react';
import './applications.css';

const Applications = () => {
    return (
      <div className="applications">
        <p>
        Here is a collection of software applications I've worked on:
        </p>
        <div className='appBody'>
          <div className='appImage'>
            <img src="./sofamart.gif" mode="fit" alt="sofamart animated GIF"/>
          </div>
          <div className='appText'><ul>
            <li>Technologies Used:
              <ul className="innerList" style={{columns: 2, margin: '0px 0px 0px 25px', listStyle: 'disc'}}>
              <li>React</li>
              <li>Styled Components</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
              <li>Node</li>
              <li>Webpack</li>
              <li>AWS</li>
            </ul>
            </li>
            <li>Coded interactive review application with summary, overview, filters, and helpfulness features</li>
            <li>Successfully deployed application on AWS with a proxy for other page components</li>
            <li>Improved load time by 65% by implementing text compression as measured by Google Page Insight</li>
          </ul>
          </div>
        </div>
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