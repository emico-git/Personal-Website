import React, { useState } from 'react';
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='kontakt-content'>
        <div className='left-side'>
            <div data-aos='fade-right' className='info-box'><BsFillTelephoneFill size="1.5em"/> 078 760 71 25</div>
            <div data-aos='fade-right' className='info-box'><GrMail size="1.5em"/> emilcu05@gmail.com</div>
            <div data-aos='fade-right' className='info-box'><ImLocation size="1.5em"/> Embrach, Zürich</div>
        </div>
        <div className='right-side'>
            <label data-aos='fade-left' for='name' className='label'> Dein Name</label>
            <input data-aos='fade-left' type='text' id='name'></input>
            <label data-aos='fade-left' for='email' className='label'> Deine Email</label>
            <input data-aos='fade-left' type='text' id='email'></input>
            <label data-aos='fade-left' for='message' className='label'> Deine Nachricht</label>
            <textarea data-aos='fade-left' id='message' rows="4" cols="50" name="comment"></textarea>
            <input  type='submit' className='submit-button'></input>
        </div>
    </div>
  );
}