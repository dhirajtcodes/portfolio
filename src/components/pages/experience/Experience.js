import React from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <FrontEnd/>
        <BackEnd/>  
      </div>
    </section>
  )
}

export default Experience