import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Email.css";

export const Email = () => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });
  
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
    to_name: 'Himanshu Mishra',  // Add your name here
    to_email: 'himanshumishra389@gmail.com'  // Add your email here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      from_name: '',
      reply_to: '',
      message: '',
      to_name: 'Himanshu Mishra',
      to_email: 'himanshumishra389@gmail.com'
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    // Log what we're sending for debugging
    console.log("Sending with EmailJS:", {
      serviceID: 'service_f7bolye',
      templateID: 'template_xmy0gs6',
      parameters: formData,
      userID: 'rN84Sn7s4PZHN3r8R'
    });

    emailjs.send(
      'service_f7bolye',
      'template_xmy0gs6',
      formData,
      'rN84Sn7s4PZHN3r8R'
    )
    .then((result) => {
      console.log("EmailJS complete response:", result);
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Message sent successfully! Check spam folder if not received.'
      });
      resetForm();
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, message: '' }));
      }, 5000);
    }, (error) => {
      console.error("EmailJS error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    });
  };

  return (
    <div className="email-container">
      {/* <form id="contact" onSubmit={sendEmail} className="form">
        <div className="form-group">
          <input 
            type="text" 
            name="from_name"
            placeholder="Name" 
            value={formData.from_name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="reply_to"
            placeholder="Email" 
            value={formData.reply_to}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Enter Your Message" 
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required 
          />
        </div>
        
        <div className="form-group">
          <button 
            type="submit" 
            className="input_btn" 
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
        {status.message && (
          <div className={`status-message ${status.error ? 'error' : 'success'}`}>
            {status.message}
          </div>
        )}
      </form> */}
    </div>
  );
};