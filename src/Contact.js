import React, { useRef } from 'react';
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'website_j06nlix', form.current, 'pWq2lUwO6Iq0ag8eB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='kontakt-content'>
        <div className='left-side'>
          <div data-aos='fade-right' className='info-box'><BsFillTelephoneFill size="1.5em"/> 078 760 71 25</div>
          <div data-aos='fade-right' className='info-box'><GrMail size="1.5em"/> emilcu05@gmail.com</div>
            <div data-aos='fade-right' className='info-box'><ImLocation size="1.5em"/> Embrach, Zürich</div>
        </div>
        <div className='emoticon3' data-aos='fade-up'></div>
        <div className='right-side'>
          <label data-aos='fade-left' for='name' className='label'>Name</label>
          <input data-aos='fade-left' type='text' id='name' name='name'></input>
          <label data-aos='fade-left' for='email' className='label'>Email</label>
          <input data-aos='fade-left' type='email' id='email' name='email'></input>
          <label data-aos='fade-left' for='message' className='label'>Nachricht</label>
          <div data-aos='fade-left'>
          <textarea id='message' rows="4" cols="50" name="comment" placeholder="( ._.) pls don't spam me..."></textarea>
          <br/>
          <input type='submit' className='submit-button'></input>
          </div>
        </div>
      </div>
    </form>
  );
}