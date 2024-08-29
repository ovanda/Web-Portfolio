import React from 'react'
import './intro.css' 
import victor from '../../assests/victor.jpg';
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";



const Intro = () => {
  return (
  <section id='intro'>
    <div className='container'>
      <div className='socials'>
        <a href='https://m.me/victor.onyejekwe.75' target='blank'><RiMessengerLine /></a>
        <a href='https://wa.me/2348035442507' target='blank'><BsWhatsapp /></a>
        <a href='https://Github.com/urchvictor' target='blank'><FaGithub />
        </a>
      </div>

      <div className='introContent'>
        <h1>Full Stack Web Developer</h1>
        <h3>Hi, i'm <span id='name'>victor</span>.</h3>
        <p>I am a skilled web Designer with experience in creating visually appealing and user friendly websites.</p>
      </div>

   
        <div className='profile-area'>
          <img src={victor} alt='logo'  className='bg' /> 
        </div>
      

    </div>
    
  </section>
  )
}

export default Intro;
