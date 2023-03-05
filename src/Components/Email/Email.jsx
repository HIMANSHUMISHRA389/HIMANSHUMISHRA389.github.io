import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Email.css"

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f7bolye', 'template_xmy0gs6', form.current, 'rN84Sn7s4PZHN3r8R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      
      <input type="text" name="user_name" placeholder='Name' />
      <br /><br />
      <input type="email" name="user_email" placeholder='Email'/>
      <br /><br />
      <textarea name="message"  placeholder='Enter Your Message'/>
      <br />
      <input type="submit" value="Send" className="input_btn" /><br />
      
    </form>
  );
};