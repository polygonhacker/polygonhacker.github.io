import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMailOutline } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaAngellist } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
    const form = useRef(null);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sfo2wsg', 'template_38dyfmt', e.currentTarget, 'tO1aZvwzpGy6JZpQn')
        .then((result) => {
            console.log(result.text);
            alert('Email sent! Thank you.');
        }, (error) => {
            console.log(error.text);
            alert('Error: email did not send.');
        });
        e.currentTarget.reset();
    };

    const emailForm = 
        (
            <form ref={form} onSubmit={sendEmail}>
                <div className='name'>
                    <input type="text" name="from_name" placeholder='Your name...' />
                </div>
                <div className='email'>
                    <input type="email" name="from_email" placeholder='Your email...' />
                </div>
                <div className='subject'>
                    <input type="subject" name="subject" placeholder='Subject...' />
                </div>
                <div className='message'>
                    <textarea name="message" placeholder='Message...' />
                </div>
                <input className='submitButton' type="submit" value="Send" />
            </form>
        )
  
    return (
        <section className='Contact' id='contact'>
            <h2>Contact</h2>
            <div className='container'>
                <div className='contactInfo'>
                    <div>
                        <MdOutlineMailOutline size={60} />
                    </div>
                    <div>
                        <a href='mailto:polygonhacker@gmail.com'>polygonhacker@gmail.com</a>
                    </div>
                    <div>
                        <BsGithub size={50} />
                    </div>
                    <div>
                        <a href='https://github.com/polygonhacker' target='_blank' rel='noopener noreferrer'>github.com/polygonhacker</a>
                    </div>
                    <div>
                        <BsLinkedin size={50} />
                    </div>
                    <div>
                        <a href='https://linkedin.com/in/yong-cheol-park' target='_blank' rel='noopener noreferrer'>linkedin.com/in/yong-cheol-park</a>
                    </div>
                    <div>
                        <FaAngellist style={{}} size={56} />
                    </div>
                    <div>
                        <a href='https://angel.co/u/yong-cheol-park' target='_blank' rel='noopener noreferrer'>angel.co/u/yong-cheol-park</a>
                    </div>
                    <div>
                        <BsInstagram style={{}} size={50} />
                    </div>
                    <div>
                        <a href='https://www.instagram.com/polygonhacker/' target='_blank' rel='noopener noreferrer'>instagram.com/polygonhacker</a>
                    </div>
                </div>
                <div className='emailCard'>
                    <h3>Send Me an Email</h3>
                    { emailForm }
                </div>
            </div>
        </section>
    );
  };

  export default Contact;
