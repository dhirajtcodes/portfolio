import React from 'react'
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get IN Touch</h5> 
      <h2>Contact Me</h2>
      
      <div className="container contact-container">
        <ContactOptions/>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact