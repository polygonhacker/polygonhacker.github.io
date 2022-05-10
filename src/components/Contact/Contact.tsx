import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef(null);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sfo2wsg', 'template_38dyfmt', e.currentTarget, 'tO1aZvwzpGy6JZpQn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.currentTarget.reset();
    };

    const emailForm = 
        (
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        )
  
    return (
      emailForm
    );
  };

  export default Contact;
