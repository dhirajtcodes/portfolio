import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { backend} from '../../../utils/nav'

const BackEnd = () => {
  return (
    <div className="experience-backend">
    <h3>BackEnd Development</h3>
      <div className="experience-content">
      {backend.map((item) => {
         return(
            <article className="experience-details">
            <BsPatchCheckFill className="experience-icon"/>
            <div>
            <h4>{item.name}</h4>
            <small className="text-light">{item.level}</small>
            </div>
         </article>
         )
      })}
      </div>
    </div>
  )
}

export default BackEnd