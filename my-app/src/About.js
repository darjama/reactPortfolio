import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='aboutMain'>
      <br/>
      <span className='aboutTitle'>Daryl Marco</span><br/>
      <span className='aboutTitle2'>Portfolio</span>
      <p>Thank you for visiting my software development portfolio. I hope you like what you see.</p>
      <p>You can contact me via the following</p>
      <div className='contactButtons'>
        <span className='contactButton'>Email</span>
        <span className='contactButton'>Phone</span>
        <span className='contactButton'>LinkedIn</span>
        <span className='contactButton'>GitHub</span>
      </div>
    </div>
  )
}

export default About;
