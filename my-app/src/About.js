import React from 'react';
import './About.css'
import { FiPhone, FiMail, FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
const About = () => {
  return (
    <div className='aboutMain'>
      <br/>
      <span className='aboutTitle'>Daryl Marco</span><br/>
      <span className='aboutTitle2'>Portfolio</span>
      <p>Thank you for visiting my software development portfolio. I hope you like what you see.</p>
      <p>You can contact me via the following</p>
      <div className='contactButtons'>
        <span className='contactButton'>
          <a href="mailto://darmarco@gmail.com" target="_blank">
            <FiMail size="1.5em"/><br/>email
          </a>
        </span>
        <span className='contactButton' >
          <a href="tel://12023787795" target="_blank">
            <FiPhone size="1.5em"/><br/>phone
          </a>
        </span>
        <span className='contactButton'>
          <a href="https://www.linkedin.com/in/darylmarco/" target="_blank">
            <AiOutlineLinkedin size="1.5em"/><br/>LinkedIn
          </a>
        </span>
        <span className='contactButton'>
          <a href="https://github.com/darjama" target="_blank">
            <FiGithub size="1.5em"/><br/>GitHub
          </a>
        </span>
      </div>
    </div>
  )
}

export default About;
