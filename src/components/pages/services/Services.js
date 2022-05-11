import React from 'react'
import DesignService from './DesignService'
import WebService from './WebService'
import ContentService from './ContentService'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service-container">
       <DesignService/>
       <WebService/>
       <ContentService/>
      </div>
    </section>
  )
}

export default Services