import React from 'react'
import CTAButton from './CTAButton'
import myProfile from '../../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import Typewriter from 'typewriter-effect';

const header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h1>Dhiraj Tandulkar</h1>
        <h4 className="text-light">
          
<Typewriter
  options={{
    strings: ['JavaScript Developer', 'FrontEnd Developer', 'ReactJS Developer', 'FullStack Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h4>
        <CTAButton/>
        <HeaderSocial/>
        <div className="my-profile">
            <img src={myProfile} alt="dkt" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header