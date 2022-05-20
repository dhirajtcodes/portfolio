import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


const HeaderSocial = () => {
  return (
    <div className="header-social">
    <a href="https://www.linkedin.com/in/dhiraj-tandulkar/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
    <a href="https://github.com/dhirajtcodes" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
    <a href="https://twitter.com/dhirajcodes" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
    <a href="https://dhirajtcodes.github.io/portfolio/" target="_blank" rel="noreferrer"><BiWorld/></a>
  </div>
  )
}

export default HeaderSocial