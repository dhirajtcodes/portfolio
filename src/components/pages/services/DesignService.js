import React from 'react'
import { FiCheck } from 'react-icons/fi';

const DesignService = () => {
  return (
    <article className="service">
    <div className="service-head">
      <h3>UI/UX Design</h3>
    </div>
    <ul className="service-list">
      <li>
        <FiCheck className="service-list-icon"/>
        <p>Lorem ipsum dolor sit amet, con</p>
      </li>
      <li>
        <FiCheck className="service-list-icon"/>
        <p>Lorem ipsum dolor sit amet, con</p></li>
      <li>
        <FiCheck className="service-list-icon"/>
        <p>Lorem ipsum dolor sit amet, con</p></li>
      <li>
        <FiCheck className="service-list-icon"/>
        <p>Lorem ipsum dolor sit amet, con</p></li>
      <li>
        <FiCheck className="service-list-icon"/>
        <p>Lorem ipsum dolor sit amet, con</p></li>
    </ul>
  </article>
  )
}

export default DesignService