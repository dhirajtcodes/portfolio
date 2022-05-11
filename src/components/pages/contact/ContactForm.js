import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const ContactForm = () => {

  const form = useRef();

  const saveForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b3q6dlq', 'template_pzojucb', form.current, '8veUjacVuOWMK-YBP')
    e.target.reset();
  }

  return (
    <form className="contact-inputs" ref={form} onClick={saveForm}>
    <input type="text" className="contact-input" name="name" placeholder="Your Full Name"  required/>
    <input type="email" className="contact-input" name="email" placeholder="Your Email" required/>
    <textarea className="contact-input" name="message" rows="7" cols="70" placeholder="Your Message" required/>
    <button type="submit" className="btn btn-primary">Send Message</button>
  </form>
  )
}

export default ContactForm