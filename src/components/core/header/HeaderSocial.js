import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


const HeaderSocial = () => {
  return (
    <div className="header-social">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
    <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
    <a href="https://dhirajtandulkar.com" target="_blank" rel="noreferrer"><BiWorld/></a>
  </div>
  )
}

export default HeaderSocial