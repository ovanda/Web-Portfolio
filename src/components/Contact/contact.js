import React from 'react'
import './contact.css'
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sdtdxpj', 'template_sxtfyml', form.current, {
        publicKey: 'IGGTamXk_XBi56-8_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your Message was sucessfuly sent,Thanks for Reaching out.')
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Your Message was not sent,Something went wrong.')

        },
      );

      e.target.reset();
  };


  return (
    <div className='contact'  id='contact'>
      <h1 id='contact'>Contact Me</h1>
      <span id='contactdes'>Please fill out the form below to discuss any work opportunities.</span>

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='user_name' />
        <input type='email' className='email' placeholder='Your Email' name='user_email' />
        <textarea name='message' role='5' placeholder='Your Message' className='msg'></textarea>
        <button type='submit' value='Send Email' className='submitBtn'>Send Email</button>


        <div className='links'>
          <a href='https://m.me/victor.onyejekwe.75' target='blank'><RiMessengerLine /></a>
          <a href='https://wa.me/2348035442507' target='blank'><BsWhatsapp /></a>
          <a href='https://Github.com/urchvictor' target='blank'><FaGithub /></a>
        </div>

        
      </form>
    </div>
  )
}

export default Contact;
