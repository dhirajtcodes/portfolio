import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { frontend } from '../../../utils/nav'

const FrontEnd = () => {
 return(
   <div className="experience-frontend">
   <h3>FrontEnd Development</h3>
   <div className="experience-content">
      {frontend.map((item, index) => {
         return(
      <article className="experience-details">
        <BsPatchCheckFill className="experience-icon" />
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

export default FrontEnd