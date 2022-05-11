import React from 'react'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

const ContactOptions = () => {
  return (
    <div className="contact-options">
    <article className="contact-option smooth-shadow">
      <AiOutlineMail className="contact-icon"/>
      <h4>Email</h4>
      <h5>dtandulkar1998@gmail.com</h5>
      <a href="mailto:dtandulkar1998@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
    </article>
    <article className="contact-option smooth-shadow">
      <AiOutlineLinkedin className="contact-icon"/>
      <h4>Linkedin</h4>
      {/* <h5>Dhiraj</h5> */}
      <a href="https://www.linkedin.com/in/dhiraj-tandulkar/" target="_blank" rel="noreferrer">Send a message</a>
    </article>
    <article className="contact-option smooth-shadow">
      <AiOutlineWhatsApp className="contact-icon"/>
      <h4>WhatsApp</h4>
      <h5>+91-8806122305</h5>
      <a href="https://api.whatsapp.com/send?phone=+918806122305" target="_blank" rel="noreferrer">Send a message</a>
    </article>
    </div>
  )
}

export default ContactOptions