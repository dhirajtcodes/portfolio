import React from 'react'
import CV from '../../../assets/cv.pdf'


const CTAButton = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Resume</a> 
      <a href="tel:8806122305"className="btn btn-primary" onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">Let's Talk</a>
    </div>
  )
}

export default CTAButton