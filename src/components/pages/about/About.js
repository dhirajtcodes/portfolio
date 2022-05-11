import React from 'react'
import AboutMe from '../../../assets/me-about.jpg'
import { FaAward, FaRegHandshake, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about-container">
        <div className="about-me">
          <div className="about-img">
            <img src={AboutMe} alt="about-me" />
          </div>
          </div>
          <div className="about-content">
             <div className="about-cards">
               <article className="about-card">
                 <FaAward className="about-icon" />
                 <h5>Experience</h5>
                 <small>2+ Years</small>
               </article>
               <article className="about-card">
                 <FaRegHandshake className="about-icon" />
                 <h5>Client</h5>
                 <small>10+ worldwide</small>
               </article>
               <article className="about-card">
                 <FaLaptopCode className="about-icon" />
                 <h5>Projects</h5>
                 <small>20+ Completed</small>
               </article>
             </div>
               <p>I'm a JavaScript developer with over 2+ years of web development experience and over 20+ Web Applications developed from scratch until deployment. I loved working in a challenging environment where I can learn & apply things I know.</p>
               <a href="tel:8806122305"className="btn btn-primary" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">Let's Talk</a>
          </div>
        </div>
      
    </section> 
  )
}

export default About