import React from 'react';
import './About.css'
import { FiPhone, FiMail, FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
const About = () => {
  return (
    <div className='aboutMain'>
      <div className="masthead" role="img" aria-label="Coyote Hills Landscape">
        <h1 className="aboutTitle"> Daryl Marco </h1>
        <h2 className="aboutTitle2"> Portfolio </h2>
        <p className="mastText">
          Thank you for visiting my software development portfolio. I am a software engineer specializing in front end and full stack web developement in the San Francsico Bay area.
          </p>
      <p className="mastText">CONTACT LINKS</p>
      <div className='contactButtons'>
        <a href="mailto://darmarco@gmail.com" target="_blank" rel='noopener noreferrer'>
          <div className='contactButton'>
              <FiMail size="1.5em"/><br/>email
          </div>
        </a>
        <a href="tel://12023787795" target="_blank" rel='noopener noreferrer'>
        <div className='contactButton' >

            <FiPhone size="1.5em"/><br/>phone
        </div>
        </a>
        <a href="https://www.linkedin.com/in/darylmarco/" target="_blank" rel='noopener noreferrer'>
          <div className='contactButton'>
              <AiOutlineLinkedin size="1.5em"/><br/>LinkedIn
          </div>
        </a>
        <a href="https://github.com/darjama" target="_blank" rel='noopener noreferrer'>
        <div className='contactButton'>
            <FiGithub size="1.5em"/><br/>GitHub
        </div>
        </a>
        </div>
      </div>
    </div>
  )
}

export default About;
