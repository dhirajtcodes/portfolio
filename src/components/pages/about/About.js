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
               <p>Software engineer with excellent problem solving skills and ability to perform well in a team passionate about coding and teaching students how to code efficiently. </p>
               <a href="tel:8806122305"className="btn btn-primary" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">Let's Talk</a>
          </div>
        </div>
      
    </section> 
  )
}

export default About