/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FiInstagram, FiTwitter} from 'react-icons/fi';
import { FaLinkedin} from 'react-icons/fa';

const footer = () => {
  return (
    <footer className="footer-container smooth-shadow">
      <div className="footer-image">
      <img src={require('../../../assets/astro-mona.webp')} alt="Hello"/>    
      </div>
    
      <a href="#" className="footer-logo">DKT</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.instagram.com/dhirajcodes/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="http://facebook.com" target="_blank" rel="noreferrer"><FiTwitter/></a>
        <a href="https://www.linkedin.com/in/dhiraj-tandulkar/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </div>
      
      <div className="footer-copyright">
        <small>&copy; Dhiraj Tandulkar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer