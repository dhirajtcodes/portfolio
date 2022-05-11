import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaLaptopCode, FaUserShield } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";


const Navbar = () => {
 const [activeNav, setActiveNav] = useState("#")


  return (
    <nav>
      <a href="#" className={activeNav === "#" ? 'active': ''} onClick={() => setActiveNav("#")}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? `active`: ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ''}><FaLaptopCode/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ''}><FaUserShield/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}><MdContactPhone/></a>
    </nav>
  )
}

export default Navbar